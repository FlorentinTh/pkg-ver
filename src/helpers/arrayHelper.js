class ArrayHelper {
  static insertAt(array, position, value) {
    return array.slice(0, position).concat(value, array.slice(position));
  }
}

export default ArrayHelper;
