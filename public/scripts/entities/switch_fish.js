class SwitchFish extends Fish {
  constructor(options) {
    super(options);
    this.tag = "switch_fish";
  }
  onClick(event) {
    this.makeNewVelocity(50);
  }
}
