import ChangeNotifier from "./change_notifier";

export default class StripRevealController extends ChangeNotifier {
  public animate(): void {
    this.animating = true;
  }

  public cancelAnimation(): void {
    this.animating = false;
  }
  
  public get animating(): boolean {
    return this._animating;
  }

  public set animating(value: boolean) {
    this._animating = value;
    this.notifyListeners();
  }  

  

  private _animating: boolean = false;
}