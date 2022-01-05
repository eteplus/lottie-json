import { Value, OffsetKeyframe } from '../properties';
import { ShapeType } from '../helpers';

export type Round = {
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
  ty: ShapeType.Round;
  /**
   * Radius
   * @desc Rounded Corner Radius
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
