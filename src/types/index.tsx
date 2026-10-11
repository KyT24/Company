export type Blog = {
  objectId?: string;
  ownerId?: string;
  title: string;
  summary: string;
  content: string;
  tags: string;
  author: string;
  created?: number;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  email: string;
};

export type Service = {
  title: string;
  icon: string;
  description: string;
  price: string;
  quote: string;
  quoteBy: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type Milestone = {
  year: string;
  text: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Value = {
  title: string;
  text: string;
};