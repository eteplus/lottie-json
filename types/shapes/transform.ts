import { MultiDimensional, Value, OffsetKeyframe } from '../properties';
import { ShapeType } from '../helpers';

export type TransformShape = {
  /**
   * Name
   * @desc After Effect's Name. Used for expressions
   */
  nm: string;
  /**
   * Type
   * @desc Shape content type
   */
  ty: ShapeType.Transform;
  /**
   * Anchor Point
   * @desc Shape Transform Anchor Point
   */
  a: MultiDimensional<number[] | OffsetKeyframe[]>;
  /**
   * Position
   * @desc Shape Transform Position
   */
  p: MultiDimensional<number[] | OffsetKeyframe[]>;
  /**
   * Scale
   * @desc Shape Transform Scale
   */
  s: MultiDimensional<number[] | OffsetKeyframe[]>;
  /**
   * Rotation
   * @desc Shape Transform Rotation
   */
  r: Value<number | OffsetKeyframe[]>;
  /**
   * Opacity
   * @desc Shape Transform Opacity
   */
  o: Value<number | OffsetKeyframe[]>;
  /**
   * Skew
   * @desc Shape Transform Skew
   */
  sk: Value<number | OffsetKeyframe[]>;
  /**
   * Skew Axis
   * @desc Shape Transform Skew Axis
   */
  sa: Value<number | OffsetKeyframe[]>;
  /**
   * Property Index
   * @desc Property Index. Used for expressions
   */
  ix?: number;
  /**
   * Hide element
   */
  hd?: boolean;
};
