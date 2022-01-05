import { MultiDimensional, OffsetKeyframe, Value } from '../properties';

export type NoValue = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: number;
};

export type SliderEffectValue = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 0;
  /**
   * Value
   * @desc Effect Value
   */
  v: Value<number | OffsetKeyframe[]>;
};

export type AngleEffectValue = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 1;
  /**
   * Value
   * @desc Effect Value
   */
  v: Value<number | OffsetKeyframe[]>;
};

export type ColorEffectValue = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 2;
  /**
   * Value
   * @desc Effect Value
   */
  v: MultiDimensional<number[] | OffsetKeyframe[]>;
};

export type PointEffectValue = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 3;
  /**
   * Value
   * @desc Effect Value
   */
  v: MultiDimensional<number[] | OffsetKeyframe[]>;
};

export type CheckBoxEffectValue = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 4;
  /**
   * Value
   * @desc Effect Value
   */
  v: Value<number | OffsetKeyframe[]>;
};

export type DropDownEffectValue = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 7;
  /**
   * Value
   * @desc Effect Value
   */
  v: Value<number | OffsetKeyframe[]>;
};

export type LayerEffectValue = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 10;
  /**
   * Value
   * @desc Effect Value
   */
  v: Value<number | OffsetKeyframe[]>;
};

export type IgnoredValue = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 6;
  /**
   * Value
   * @desc Effect Value
   */
  v: number;
};

export type ChangeToColorEffect = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 5;
  /**
   * Effects
   * @desc Effect List of properties
   */
  ef: [
    ColorEffectValue,
    ColorEffectValue,
    DropDownEffectValue,
    DropDownEffectValue,
    IgnoredValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    IgnoredValue,
    SliderEffectValue,
    DropDownEffectValue,
  ];
  /**
   * Enabled
   * @desc Enabled AE property value
   */
  en: 0 | 1;
};

export type TintEffect = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 20;
  /**
   * Effects
   * @desc Effect List of properties
   */
  ef: [ColorEffectValue, ColorEffectValue, SliderEffectValue];
};

export type FillEffect = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 21;
  /**
   * Effects
   * @desc Effect List of properties
   */
  ef: [
    PointEffectValue,
    DropDownEffectValue,
    ColorEffectValue,
    DropDownEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
  ];
};

export type StrokeEffect = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 22;
  /**
   * Effects
   * @desc Effect List of properties
   */
  ef: [
    ColorEffectValue,
    CheckBoxEffectValue,
    CheckBoxEffectValue,
    ColorEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    DropDownEffectValue,
    DropDownEffectValue,
  ];
};

export type TritoneEffect = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 23;
  /**
   * Effects
   * @desc Effect List of properties
   */
  ef: [ColorEffectValue, ColorEffectValue, ColorEffectValue];
};

export type ProLevelsEffect = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 24;
  /**
   * Effects
   * @desc Effect List of properties
   */
  ef: [
    DropDownEffectValue,
    NoValue,
    NoValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    NoValue,
    NoValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    NoValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    NoValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    NoValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    SliderEffectValue,
    NoValue,
  ];
};

export type DropShadowEffect = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 25;
  /**
   * Effects (color, opacity, angle, distance, blur)
   * @desc Effect List of properties
   */
  ef: [ColorEffectValue, SliderEffectValue, AngleEffectValue, SliderEffectValue, SliderEffectValue];
};

export type Matte3Effect = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 28;
  /**
   * Effects (index)
   * @desc Effect List of properties
   */
  ef: [SliderEffectValue];
};

export type GaussianBlurEffect = {
  /**
   * Effect Index
   * @desc Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.
   */
  ix: number;
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
   * @desc Effect Type
   */
  ty: 29;
  /**
   * Effects (sigma, dimensions, wrap)
   * @desc Effect List of properties
   */
  ef: [SliderEffectValue, SliderEffectValue, CheckBoxEffectValue];
};
