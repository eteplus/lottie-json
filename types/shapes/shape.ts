import { ShapeProperty, ShapePropKeyframed } from '../properties';
import { ShapeType } from '../helpers';

export type Shape = {
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
   * Vertices
   * @desc Shape's vertices
   */
  ks: ShapeProperty | ShapePropKeyframed;
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
