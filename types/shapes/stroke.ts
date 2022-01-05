import { BlendMode, LineCap, LineJoin, ShapeType, StorkeDash } from '../helpers';
import { MultiDimensional, Value, OffsetKeyframe } from '../properties';

/**
 * Solid Stroke
 */
export type Stroke = {
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
  ty: ShapeType.Stroke;
  /**
   * Line Cap
   * @desc Stroke Line Cap;
   */
  lc: LineCap;
  /**
   * Line Join
   * @desc Stroke Line Join
   */
  lj: LineJoin;
  /**
   * Miter Limit
   * @desc Stroke Miter Limit. Only if Line Join is set to Miter
   */
  ml: number;
  /**
   * Opacity
   * @desc Stroke Opacity
   */
  o: Value<number | OffsetKeyframe[]>;
  /**
   * Width
   * @desc Stroke Width
   */
  w: Value<number | OffsetKeyframe[]>;
  /**
   * Color
   * @desc Stroke Color
   */
  c: MultiDimensional<number[] | OffsetKeyframe[]>;
  /**
   * 混合模式 - Blend Mode
   * @default BlendMode.Normal
   */
  bm?: BlendMode;
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
   * Dashes
   */
  d?: StorkeDash[];
};
