/**
 * @namespace lottie.properties
 */

export type Keyframe = {
  /**
   * Time
   * @desc Start time of keyframe segment
   */
  t?: number;
  /**
   * Jump
   * @desc Jump to the end value
   */
  h?: 0 | 1;
  /**
   * In Value
   * @desc Bezier curve interpolation in value
   */
  i?: {
    /**
     * X axis
     * @desc bezier x axis. Array of numbers
     */
    x: number[];
    /**
     * Y axis
     * @desc bezier y axis. Array of numbers
     */
    y: number[];
  };
  /**
   * Out Value
   * @desc Bezier curve interpolation out value
   */
  o?: {
    /**
     * X axis
     * @desc bezier x axis. Array of numbers
     */
    x: number[];
    /**
     * Y axis
     * @desc bezier y axis. Array of numbers
     */
    y: number[];
  };
};

export type OffsetKeyframe = {
  /**
   * Start
   * @desc Start value of keyframe segment
   */
  s?: number[];
  /**
   * End
   * @desc End value of keyframe segment
   */
  e?: number[];
  /**
   * Time
   * @desc Start time of keyframe segment
   */
  t?: number;
  /**
   * Jump
   * @desc Jump to the end value
   */
  h?: 0 | 1;
  /**
   * In Value
   * @desc Bezier curve interpolation in value
   */
  i?: {
    /**
     * X axis
     * @desc bezier x axis. Array of numbers
     */
    x: number[];
    /**
     * Y axis
     * @desc bezier y axis. Array of numbers
     */
    y: number[];
  };
  /**
   * Out Value
   * @desc Bezier curve interpolation out value
   */
  o?: {
    /**
     * X axis
     * @desc bezier x axis. Array of numbers
     */
    x: number[];
    /**
     * Y axis
     * @desc bezier y axis. Array of numbers
     */
    y: number[];
  };
  /**
   * In Tangent
   * @desc In Spatial Tangent. Only for spatial properties. Array of numbers
   */
  ti?: number[];
  /**
   * Out Tangent
   * @desc Out Spatial Tangent. Only for spatial properties. Array of numbers
   */
  to?: number[];
};

export type MultiDimensional<K = [x: number, y: number, z: number]> = {
  /**
   * Animated
   * @desc Defines if property is animated
   */
  a: 0 | 1;
  /**
   * Property Index
   * @desc Property Index. Used for expressions
   */
  ix: string | number;
  /**
   * Value
   * @desc Property Value
   */
  k: K;
  /**
   * Expression
   * @desc Property Expression. An AE expression that modifies the value
   */
  x?: string;
};

export type MultiDimensionalKeyframed = MultiDimensional<OffsetKeyframe[]>;

export type Value<K = number> = {
  /**
   * Animated
   * @desc Defines if property is animated
   */
  a: 0 | 1;
  /**
   * Value
   * @desc Property Value
   */
  k: K;
  /**
   * Expression
   * @desc Property Expression. An AE expression that modifies the value
   */
  x?: string;
  /**
   * Property Index
   * @desc Property Index. Used for expressions
   */
  ix: string | number;
};

export type ValueKeyframed = Value<OffsetKeyframe[]>;

export type Bezier = {
  /**
   * Closed
   * @desc Closed property of shape
   */
  c: boolean;
  /**
   * In Point
   * @desc Bezier curve In points. Array of 2 dimensional arrays
   */
  i: Array<number[]>;
  /**
   * Out Point
   * @desc Bezier curve Out points. Array of 2 dimensional arrays
   */
  o: Array<number[]>;
  /**
   * Vertices
   * @desc Bezier curve Vertices. Array of 2 dimensional arrays
   */
  v: Array<number[]>;
};

export type ShapeProperty = {
  /**
   * Animated
   * @desc Defines if property is animated
   */
  a: 0 | 1;
  /**
   * Value
   * @desc Property Value
   */
  k: Bezier;
  /**
   * Expression
   * @desc Property Expression. An AE expression that modifies the value
   */
  x: string;
  /**
   * Property Index
   * @desc Property Index. Used for expressions
   */
  ix: string;
};

export type ShapePropKeyframe = {
  /**
   * Start
   * @desc Start value of keyframe segment
   */
  s: Bezier | Bezier[];
  /**
   * End
   * @desc End value of keyframe segment
   */
  e: Bezier | Bezier[];
  /**
   * Time
   * @desc Start time of keyframe segment
   */
  t: number;
  /**
   * Jump
   * @desc Jump to the end value
   */
  h?: 0 | 1;
  /**
   * In Value
   * @desc Bezier curve interpolation in value
   */
  i: {
    /**
     * X axis
     * @desc bezier x axis. Array of numbers
     */
    x: number | number[];
    /**
     * Y axis
     * @desc bezier y axis. Array of numbers
     */
    y: number | number[];
  };
  /**
   * Out Value
   * @desc Bezier curve interpolation out value
   */
  o: {
    /**
     * X axis
     * @desc bezier x axis. Array of numbers
     */
    x: number | number[];
    /**
     * Y axis
     * @desc bezier y axis. Array of numbers
     */
    y: number | number[];
  };
};

export type ShapePropKeyframed = {
  /**
   * Animated
   * @desc Defines if property is animated
   */
  a: number;
  /**
   * Value
   * @desc Property Value
   */
  k: ShapePropKeyframe[];
  /**
   * Expression
   * @desc Property Expression. An AE expression that modifies the value
   */
  x: string;
  /**
   * Property Index
   * @desc Property Index. Used for expressions
   */
  ix: string;
};

export type GradientColors = {
  /**
   * Animatable colors, as a vector containing [offset, r, g, b]
   */
  k: Array<MultiDimensional<number[] | OffsetKeyframe[]>>;
  /**
   * Number of colors
   */
  p: number;
};
