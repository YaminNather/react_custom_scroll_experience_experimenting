export default class ChangeNotifier {
  public addListener(listener: ()=>void): void {
    this.listeners.push(listener);
  }

  public removeListener(listener: ()=>void): void {
    for(let i: number = 0; i < this.listeners.length; i++) {
      if(this.listeners[i] === listener)
        this.listeners.splice(i, 1);
    }
  }

  protected notifyListeners(): void {
    for(const listener of this.listeners)
      listener();
  }

  private listeners: (()=>void)[] = [];
}