import { BlendMode, FillRule, ShapeType } from '../helpers';
import { MultiDimensionalKeyframed, Value, OffsetKeyframe } from '../properties';

export type Fill = {
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
  ty: ShapeType.Fill;
  /**
   * Opacity
   * @desc Fill Opacity
   */
  o: Value<number | OffsetKeyframe[]>;
  /**
   * Color
   * @desc Fill Color
   */
  c: MultiDimensionalKeyframed;
  /**
   * Rule
   * @desc Fill Rule
   */
  r: FillRule;
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
   * 混合模式 - Blend Mode
   * @default BlendMode.Normal
   */
  bm?: BlendMode;
};
