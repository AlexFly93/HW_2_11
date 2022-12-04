"use strict";

class Figure3D {
  /**
   *
   * @param {'string'} name
   */
  constructor(name) {
    if (this.constructor === Figure) {
      throw new Error("You cannot create instance in abstract class");
    }
    this.name = name;
  }
  getVolume() {
    throw new Error("you call method abstract class");
  }
}

class Sphere extends Figure3D {
  /**
   *
   * @param {'number'} diametr
   */
  constructor(diametr) {
    super("sphere");
    this.diametr = diametr;
  }
  set diametr(diametr) {
    if (typeof diametr !== "number") {
      throw new TypeError("Diametr must be NUMBER");
    }
    if (diametr <= 0) {
      throw new RangeError("Diametr cannot be 0 or less");
    }
    this._diametr = diametr;
    this._radius = diametr / 2;
  }
  getVolume() {
    return (4 / 3) * Math.PI * (this._radius * this._radius * this._radius);
  }
}

class Cube extends Figure3D {
  /**
   *
   * @param {'number'} cubeEdge
   */
  constructor(cubeEdge) {
    super("Cube");
    this.cubeEdge = cubeEdge;
  }
  set cubeEdge(cubeEdge) {
    if (typeof cubeEdge !== "number") {
      throw new TypeError("cubeEdge must be NUMBER");
    }
    if (cubeEdge <= 0) {
      throw new RangeError("cubeEdge cannot be 0 or less");
    }
    this._cubeEdge = cubeEdge;
  }
  getVolume() {
    return this._cubeEdge * this._cubeEdge * this._cubeEdge;
  }
}

class Cylinder extends Figure3D {
  /**
   *
   * @param {'number'} diametr
   * @param {'number'} height
   */
  constructor(diametr, height) {
    super("Cylinder");
    this.diametr = diametr;
    this.height = height;
  }
  set diametr(diametr) {
    if (typeof diametr !== "number") {
      throw new TypeError("Diametr must be NUMBER");
    }
    if (diametr <= 0) {
      throw new RangeError("Diametr cannot be 0 or less");
    }
    this._diametr = diametr;
    this._radius = diametr / 2;
  }
  set height(height) {
    if (typeof height !== "number") {
      throw new TypeError("Height must be NUMBER");
    }
    if (height <= 0) {
      throw new RangeError("Height cannot be 0 or less");
    }
    this._height = height;
  }
  getVolume() {
    return Math.PI * (this._radius * this._radius) * this._height;
  }
}

try {
  const figureA = new Sphere(10);
  const figureB = new Cube(8);
  const figureC = new Cylinder(6, 7);
  console.log(getVolume3DFigure(figureA));
  console.log(getVolume3DFigure(figureB));
  console.log(getVolume3DFigure(figureC));
  console.log(figureA.getVolume());
  console.log(figureB.getVolume());
} catch (error) {
  console.log(error);
}

function getVolume3DFigure(obj) {
  if (obj instanceof Figure3D) {
    return obj.getVolume();
  }
  throw new TypeError("It's not a 3DFigure");
}
