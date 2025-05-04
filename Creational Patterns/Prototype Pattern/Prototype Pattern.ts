interface Prototype<T> {
  clone(): T;
}

class Tour implements Prototype<Tour> {
  constructor(
    public name: string,
    public price: number,
    public tags: string[]
  ) {}

  clone(): Tour {
    return new Tour(this.name, this.price, [...this.tags]); // deep copy tags
  }
}

// Dùng thử
const original = new Tour("Tour Hà Nội", 1000000, ["miền bắc", "phố cổ"]);
const copy = original.clone();

copy.name = "Tour Sài Gòn";
copy.tags.push("miền nam");

console.log(original); // name vẫn là "Hà Nội", tags không có "miền nam"
console.log(copy);     // đã đổi name và tags
