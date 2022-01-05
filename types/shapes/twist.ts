import { ShapeType } from '../helpers';
import { MultiDimensional, Value, OffsetKeyframe } from '../properties';

export type Twist = {
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
   * Direction
   * @desc After Effect's Direction. Direction how the shape is drawn. Used for trim path for example
   */
  d: number;
  /**
   * Type
   * @desc Shape content type
   */
  ty: ShapeType.Shape;
  /**
   * Angle
   * @desc Shape's angle
   */
  a: Value<number | OffsetKeyframe[]>;
  /**
   * Center Point
   * @desc Shape's center point
   */
  c: MultiDimensional<number[] | OffsetKeyframe[]>;
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
