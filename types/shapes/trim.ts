import { Value, OffsetKeyframe } from '../properties';
import { ShapeType, TrimMultipleShapeType } from '../helpers';

export type Trim = {
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
  ty: ShapeType.Trim;
  /**
   * Start
   * @desc Trim Start
   */
  s: Value<number | OffsetKeyframe[]>;
  /**
   * End
   * @desc Trim End
   */
  e: Value<number | OffsetKeyframe[]>;
  /**
   * Offset
   * @desc Trim Offset
   */
  o: Value<number | OffsetKeyframe[]>;
  /**
   * Trim Multiple
   */
  m: TrimMultipleShapeType;
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
