type ContactEvent = {
  action: 'submit_form';
  category: 'contact';
  label: string;
  value?: string;
};

type ClickEvent = {
  action: 'click';
  category: 'other';
  label: string;
  value: string;
};

export type Event = ContactEvent | ClickEvent;