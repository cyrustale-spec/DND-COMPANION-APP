import { Tab } from '../stores/tabStore';

export interface IpcApi {
  getTabs: () => Promise<Tab[]>;
  saveTab: (tab: Tab) => Promise<void>;
  deleteTab: (id: string) => Promise<void>;
}

declare global {
  interface Window {
    ipc: IpcApi;
  }
}
