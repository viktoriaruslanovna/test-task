interface IStorage {
  key: string;
  fallback: string;
}

class Storage implements IStorage {
  key: string;
  fallback: string;
  constructor(key: string, fallback: string = '') {
    this.key = key;
    this.fallback = fallback;
  }

  get() {
    return JSON.parse(localStorage.getItem(this.key) ?? this.fallback);
  }

  set(value: any) {
    return localStorage.setItem(this.key, JSON.stringify(value));
  }
}

export { Storage };
