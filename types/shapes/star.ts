import { ShapeType, StarType } from '../helpers';
import { MultiDimensional, Value, OffsetKeyframe } from '../properties';

export type Star = {
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
  ty: ShapeType.Star;
  /**
   * Position
   * @desc Star's Position
   */
  p: MultiDimensional<number[] | OffsetKeyframe[]>;
  /**
   * Inner Radius
   * @desc Star's inner radius. (Star only)
   */
  ir: Value<number | OffsetKeyframe[]>;
  /**
   * Inner Roundness
   * @desc Star's inner roundness. (Star only)
   */
  is: Value<number | OffsetKeyframe[]>;
  /**
   * Outer Radius
   * @desc Star's outer radius
   */
  or: Value<number | OffsetKeyframe[]>;
  /**
   * Outer Roundness
   * @desc Star's outer roundness
   */
  os: Value<number | OffsetKeyframe[]>;
  /**
   * Rotation
   * @desc Star's rotation
   */
  r: Value<number | OffsetKeyframe[]>;
  /**
   * Points
   * @desc Star's number of points
   */
  pt: Value<number | OffsetKeyframe[]>;
  /**
   * Star Type
   * @desc Star's type. Polygon or Star
   */
  sy: StarType;
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
