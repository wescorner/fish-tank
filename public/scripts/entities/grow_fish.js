class GrowFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = "/images/grow-fish.png";
    this.tag = "grow_fish";
  }
  onClick(event) {
    this.height *= 1.5;
    this.width *= 1.5;
  }
}
