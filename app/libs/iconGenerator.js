class IconGenerator {
  static generateIcons() {
    const num = 141;
    let numArray = [...Array(num).keys()].map(i => ++i);
    let list = [];
    numArray.forEach((no) => {
      let name = `icon_${no}`;
      let icon = new IconGenerator(name);
      list.push(icon);
    });
    return list;
  }


  constructor(name) {
    this.name = name;
  }

  path() {
    return `/icon/${this.name}.png`;
  }
}

export default IconGenerator;
