import { MultiDimensional, Value, OffsetKeyframe } from '../properties';
import { ShapeType } from '../helpers';

export type Rect = {
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
  ty: ShapeType.Rect;
  /**
   * Position
   * @desc Rect's Position
   */
  p: MultiDimensional<number[] | OffsetKeyframe[]>;
  /**
   * Size
   * @desc Rect's size
   */
  s: MultiDimensional<number[] | OffsetKeyframe[]>;
  /**
   * Rounded corners
   * @desc Rect's rounded corners
   */
  r: Value<number | OffsetKeyframe[]>;
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
