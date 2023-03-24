import { fdata } from './data';

// author: @neosh11

interface Flag {
  emoji: string;
  unicode: string;
  name: string;
}

// define type as keys of dfdata
export type EFlagKeys = keyof typeof fdata;

// memoized class
class EFlags {
  flags: typeof fdata;
  // private cache
  private _allFlags: Flag[] | null = null;
  private _allCodes: string[] | null = null;
  private _allUnicode: string[] | null = null;
  private _allNames: string[] | null = null;

  constructor() {
    this.flags = fdata;
  }
  getAllFlags(): Flag[] {
    if (this._allFlags === null) {
      this._allFlags = Object.values(this.flags);
    }
    return this._allFlags;
  }
  getAllCodes(): string[] {
    if (this._allCodes === null) {
      this._allCodes = Object.keys(this.flags);
    }
    return this._allCodes;
  }
  getAllUnicode(): string[] {
    if (this._allUnicode === null) {
      this._allUnicode = Object.values(this.flags).map((flag) => flag.unicode);
    }
    return this._allUnicode;
  }
  getAllNames(): string[] {
    if (this._allNames === null) {
      this._allNames = Object.values(this.flags).map((flag) => flag.name);
    }
    return this._allNames;
  }
}

const emojiFlags: EFlags = new EFlags();
export default emojiFlags;
