import { ShapeType } from '../helpers';
import { MultiDimensional, OffsetKeyframe } from '../properties';

export type Ellipse = {
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
  ty: ShapeType.Ellipse;
  /**
   * Position
   * @desc Ellipse's Position
   */
  p: MultiDimensional<number[] | OffsetKeyframe[]>;
  /**
   * Size
   * @desc Ellipse's size
   */
  s: MultiDimensional<number[] | OffsetKeyframe[]>;
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
