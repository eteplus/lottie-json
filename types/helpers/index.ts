import { MultiDimensional, OffsetKeyframe, ShapeProperty, ShapePropKeyframed, Value } from '../properties';

/**
 * 混合模式
 */
export enum BlendMode {
  Normal,
  Multiply,
  Screen,
  Overlay,
  Darken,
  Lighten,
  ColorDodge,
  ColorBurn,
  HardLight,
  SoftLight,
  Difference,
  Exclusion,
  Hue,
  Saturation,
  Color,
  Luminosity,
}

export enum TextBased {
  Characters = 1,
  CharacterExcludingSpaces = 2,
  Words = 3,
  Lines = 4,
}

export enum TextGrouping {
  Characters = 1,
  Word = 2,
  Line = 3,
  All = 4,
}

export enum TextShape {
  Square = 1,
  RampUp = 2,
  RampDown = 3,
  Triangle = 4,
  Round = 5,
  Smooth = 6,
}

export enum TextJustify {
  Left,
  Right,
  Center,
}

export enum MaskMode {
  None = 'n',
  Additive = 'a',
  Subtract = 's',
  Intersect = 'i',
  Lighten = 'l',
  Darken = 'd',
  Difference = 'f',
}

/**
 * Layer 类型
 */
export enum LayerType {
  /** 预合成层 */
  PreComp,
  /** 固体层 */
  Solid,
  /** 图片层 */
  Image,
  /** 空层 */
  Null,
  /** 形状层 */
  Shape,
  /** 文本层 */
  Text,
}

export enum MatteMode {
  Normal,
  Alpha,
  InvertedAlpha,
  Luma,
  InvertedLuma,
}

export enum ShapeType {
  Ellipse = 'el',
  Fill = 'fl',
  GradientFill = 'gf',
  Group = 'gr',
  GradientStroke = 'gs',
  Merge = 'mm',
  Rect = 'rc',
  Repeater = 'rp',
  Round = 'rd',
  Shape = 'sh',
  Star = 'sr',
  Stroke = 'st',
  Trim = 'tm',
  Transform = 'tr',
  Twist = 'tw',
}

export enum Composite {
  Above = 1,
  Below = 2,
}

export enum LineCap {
  Butt = 1,
  Round = 2,
  Square = 3,
}

export enum LineJoin {
  Miter = 1,
  Round = 2,
  Bevel = 3,
}

export enum FillRule {
  NonZero = 1,
  EvenOdd = 2,
}

export enum GradientType {
  Linear = 1,
  Radial = 2,
}

export enum StarType {
  Star = 1,
  Polygon = 2,
}

export enum TrimMultipleShapeType {
  Simultaneously = 1,
  Individually = 2,
}

export enum StrokeDashType {
  Dash = 'd',
  Gap = 'g',
  Offset = '0',
}

export type StorkeDash = {
  /**
   * Name
   * @desc After Effect's Name. Used for expressions
   */
  nm: string;
  /**
   * Type
   * @desc Storke Dash Type
   */
  n: StrokeDashType;
  /**
   * Value
   * @desc Stroke Value
   */
  v: Value<number | OffsetKeyframe[]>;
};

export type Transform = {
  /**
   * Anchor Point
   * @desc Transform Anchor Point
   * @default { "a":0, "k":[0, 0, 0] }
   */
  a?: MultiDimensional<[tx: number, ty:number, tz: number] | OffsetKeyframe[]>;
  /**
   * Position
   * @desc Transform Position
   * @default { "a":0, "k":[0, 0, 0] }
   */
  p?: MultiDimensional<[tx: number, ty:number, tz: number] | OffsetKeyframe[]>;
  /**
   * Scale
   * @desc Transform Scale
   * @default { "a":0, "k":[100, 100, 100] }
   */
  s?: MultiDimensional<[sx: number, sy:number, sz: number] | OffsetKeyframe[]>;
  /**
   * Rotation
   * @desc Transform Rotation
   * @default { "a":0, "k":0 }
   */
  r?: Value<number | OffsetKeyframe[]>;
  /**
   * Opacity
   * @desc Transform Opacity
   * @default { "a":0, "k":100 }
   */
  o?: Value<number | OffsetKeyframe[]>;
  /**
   * Position X
   * @desc Transform Position X
   * @default { "a":0, "k":0 }
   */
  px?: Value<number | OffsetKeyframe[]>;
  /**
   * Position Y
   * @desc Transform Position Y
   * @default { "a":0, "k":0 }
   */
  py?: Value<number | OffsetKeyframe[]>;
  /**
   * Position Z
   * @desc Transform Position Z
   * @default { "a":0, "k":0 }
   */
  pz?: Value<number | OffsetKeyframe[]>;
  /**
   * Skew
   * @desc Transform Skew
   * @default { "a":0, "k":0 }
   */
  sk?: Value<number | OffsetKeyframe[]>;
  /**
   * Skew Axis
   * @desc Transform Skew Axis
   * @default { "a":0, "k":0 }
   */
  sa?: Value<number | OffsetKeyframe[]>;
};

export type Mask = {
  /**
   * Inverted
   * @desc Inverted Mask flag
   * @default false
   */
  inv: boolean;
  /**
   * Name
   * @desc Mask name. Used for expressions and effects
   */
  nm: string;
  /**
   * Points
   * @desc Mask vertices
   */
  pt: ShapeProperty | ShapePropKeyframed;
  /**
   * Opacity
   * @desc Mask opacity
   * @default {"a":0, "k":100}
   */
  o: Value<number | OffsetKeyframe[]>;
  /**
   * Mode
   * @desc Mask mode. Not all mask types are supported
   * @default MaskMode.Additive
   */
  mode: MaskMode;
  /**
   * Dilate
   */
  x: Value<number | OffsetKeyframe[]>;
};
