import { Composite, ShapeType, Transform } from '../helpers';
import { Value, OffsetKeyframe } from '../properties';

export type Repeater = {
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
  ty: ShapeType.Repeater;
  /**
   * Copies
   * @desc Number of Copies
   * @default {"a": 0, "k": 1}
   */
  c: Value<number | OffsetKeyframe[]>;
  /**
   * Offset
   * @desc Offset of Copies
   * @default {"a": 0, "k": 0}
   */
  o: Value<number | OffsetKeyframe[]>;
  /**
   * Composite
   * @desc Composite of copies
   * @default Composite.Above
   */
  m: Composite;
  /**
   * Transform
   * @desc Transform values for each repeater copy
   */
  tr: Transform;
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
