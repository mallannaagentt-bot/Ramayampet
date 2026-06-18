export interface BookingFormState {
  name: string;
  phone: string;
  modelType: string;
  issueType: string;
  address: string;
  notes: string;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}
