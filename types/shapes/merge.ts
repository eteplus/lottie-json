import { ShapeType } from '../helpers';

export type Merge = {
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
   * @desc Shape content type THIS FEATURE IS NOT SUPPORTED. It's exported because if you export it, they will come
   */
  ty: ShapeType.Merge;
  /**
   * Merge Mode
   */
  mm: number;
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
