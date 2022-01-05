import { BlendMode, GradientType, LineCap, LineJoin, ShapeType, StorkeDash } from '../helpers';
import { GradientColors, MultiDimensional, Value, OffsetKeyframe } from '../properties';

export type GradientStroke = {
  /**
   * Match Name
   * @desc After Effect's Match Name. Used for expressions
   */
  mn: string;
  /**
   * Name
   * @desc After Effect's Name. Used for expressions
   */
  nm: string;
  /**
   * Type
   * @desc Shape content type
   */
  ty: ShapeType.GradientStroke;
  /**
   * Opacity
   * @desc Stroke Opacity
   */
  o: Value<number | OffsetKeyframe[]>;
  /**
   * Start Point
   * @desc Gradient Start Point
   */
  s: MultiDimensional<number[] | OffsetKeyframe[]>;
  /**
   * End Point
   * @desc Gradient End Point
   */
  e: MultiDimensional<number[] | OffsetKeyframe[]>;
  /**
   * Type
   * @desc Gradient Type
   */
  t: GradientType;
  /**
   * Highlight Length
   * @desc Gradient Highlight Length. Only if type is Radial
   */
  h: Value<number | OffsetKeyframe[]>;
  /**
   * Highlight Angle
   * @desc Highlight Angle. Only if type is Radial
   */
  a: Value<number | OffsetKeyframe[]>;
  /**
   * Gradient Colors
   */
  g: GradientColors;
  /**
   * Stroke Width
   * @desc Gradient Stroke Width
   */
  w: Value<number | OffsetKeyframe[]>;
  /**
   * Line Cap
   * @desc Gradient Stroke Line Cap;
   */
  lc: LineCap;
  /**
   * Line Join
   * @desc Gradient Stroke Line Join
   */
  lj: LineJoin;
  /**
   * Miter Limit
   * @desc Gradient Stroke Miter Limit. Only if Line Join is set to Miter
   */
  ml: number;
  /**
   * Property Index
   * @desc Property Index. Used for expressions
   */
  ix?: number;
  /**
   * Hide element
   */
  hd?: boolean;
  /**
   * 混合模式 - Blend Mode
   * @default BlendMode.Normal
   */
  bm?: BlendMode;
  /**
   * Dashes
   */
  d?: StorkeDash[];
};
