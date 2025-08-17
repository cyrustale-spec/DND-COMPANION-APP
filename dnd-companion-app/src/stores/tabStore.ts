import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export interface Tab {
  id: string;
  title: string;
  type: 'journal' | 'character' | 'bestiary';
  content: string;
}

interface TabState {
  tabs: Tab[];
  activeTabId: string | null;
  isInitialized: boolean;
  initialize: () => Promise<void>;
  addTab: (type: Tab['type']) => Promise<void>;
  closeTab: (id: string) => Promise<void>;
  setActiveTab: (id: string) => void;
  updateTabContent: (id: string, content: string) => Promise<void>;
}

const useTabStore = create<TabState>((set, get) => ({
  tabs: [],
  activeTabId: null,
  isInitialized: false,
  initialize: async () => {
    if (get().isInitialized) return;

    const initialTabs = await window.ipc.getTabs();
    if (initialTabs.length > 0) {
      set({ tabs: initialTabs, activeTabId: initialTabs[0].id, isInitialized: true });
    } else {
      // If DB is empty, create a welcome tab
      const newId = uuidv4();
      const welcomeTab: Tab = { id: newId, title: 'Welcome', type: 'journal', content: '# Welcome to your D&D Companion!' };
      await window.ipc.saveTab(welcomeTab);
      set({ tabs: [welcomeTab], activeTabId: newId, isInitialized: true });
    }
  },
  addTab: async (type) => {
    const newId = uuidv4();
    let newTab: Tab;
    switch (type) {
      case 'character':
        newTab = { id: newId, title: 'New Character', type, content: '' };
        break;
      case 'bestiary':
        newTab = { id: newId, title: 'Bestiary', type, content: '' };
        break;
      case 'journal':
      default:
        newTab = { id: newId, title: `New Session`, type, content: '' };
        break;
    }
    await window.ipc.saveTab(newTab);
    set((state) => ({ tabs: [...state.tabs, newTab], activeTabId: newId }));
  },
  closeTab: async (id) => {
    await window.ipc.deleteTab(id);
    set((state) => {
      const newTabs = state.tabs.filter((tab) => tab.id !== id);
      let newActiveId = state.activeTabId;
      if (state.activeTabId === id) {
        newActiveId = newTabs.length > 0 ? newTabs[newTabs.length - 1].id : null;
      }
      return { tabs: newTabs, activeTabId: newActiveId };
    });
  },
  setActiveTab: (id) => set({ activeTabId: id }),
  updateTabContent: async (id, content) => {
    const tabToUpdate = get().tabs.find(t => t.id === id);
    if (tabToUpdate) {
      const updatedTab = { ...tabToUpdate, content };
      await window.ipc.saveTab(updatedTab);
      set((state) => ({
        tabs: state.tabs.map((tab) => (tab.id === id ? updatedTab : tab)),
      }));
    }
  },
}));

// Initialize the store
useTabStore.getState().initialize();

export default useTabStore;
