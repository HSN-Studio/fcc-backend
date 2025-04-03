import type { Schema, Struct } from '@strapi/strapi';

export interface ContainerSizeImages extends Struct.ComponentSchema {
  collectionName: 'components_container_size_images';
  info: {
    description: '';
    displayName: 'images';
  };
  attributes: {
    front: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    left: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    rear: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    right: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    top: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
  };
}

export interface ContainerSizeRealWorldDimensions
  extends Struct.ComponentSchema {
  collectionName: 'components_container_size_real_world_dimensions';
  info: {
    description: '';
    displayName: 'Real World Dimensions';
    icon: 'key';
  };
  attributes: {
    height: Schema.Attribute.Decimal & Schema.Attribute.Required;
    length: Schema.Attribute.Decimal & Schema.Attribute.Required;
    width: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface DraggablesDraggableOptions extends Struct.ComponentSchema {
  collectionName: 'components_draggables_draggable_options';
  info: {
    description: '';
    displayName: 'draggable-options';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    realWorldDimensions: Schema.Attribute.Component<
      'container-size.real-world-dimensions',
      false
    > &
      Schema.Attribute.Required;
    requiresSpecialQuote: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    SKU: Schema.Attribute.String;
  };
}

export interface DraggablesDraggables extends Struct.ComponentSchema {
  collectionName: 'components_draggables_draggables';
  info: {
    description: '';
    displayName: 'draggables';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    installLocation: Schema.Attribute.Enumeration<['exterior', 'interior']> &
      Schema.Attribute.Required;
    options: Schema.Attribute.Component<'draggables.draggable-options', true> &
      Schema.Attribute.Required;
    parentCategory: Schema.Attribute.String;
  };
}

export interface RadioGroupsOption extends Struct.ComponentSchema {
  collectionName: 'components_radio_groups_options';
  info: {
    description: '';
    displayName: 'option';
  };
  attributes: {
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    requiresSpecialQuote: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    SKU: Schema.Attribute.String;
    supported_container_sizes: Schema.Attribute.Relation<
      'oneToMany',
      'api::size.size'
    >;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RadioGroupsRadioGroup extends Struct.ComponentSchema {
  collectionName: 'components_radio_groups_radio_groups';
  info: {
    description: '';
    displayName: 'RadioGroup';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    options: Schema.Attribute.Component<'radio-groups.option', true> &
      Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedOption extends Struct.ComponentSchema {
  collectionName: 'components_shared_options';
  info: {
    displayName: 'option';
  };
  attributes: {
    packageName: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    requiresSpecialQuote: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'container-size.images': ContainerSizeImages;
      'container-size.real-world-dimensions': ContainerSizeRealWorldDimensions;
      'draggables.draggable-options': DraggablesDraggableOptions;
      'draggables.draggables': DraggablesDraggables;
      'radio-groups.option': RadioGroupsOption;
      'radio-groups.radio-group': RadioGroupsRadioGroup;
      'shared.media': SharedMedia;
      'shared.option': SharedOption;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
