import type {
  Service,
  Testimonial,
  Milestone,
  Stat,
  Value,
} from "../types";

export const tagline = "Level up your game, every day.";

export const stats: Stat[] = [
  { value: "10K+", label: "Active members" },
  { value: "2,500+", label: "Games in stock" },
  { value: "9", label: "Years in business" },
  { value: "120+", label: "Events hosted" },
];

export const services: Service[] = [
  {
    title: "Game Store",
    icon: "🎮",
    description:
      "New releases, classics and pre-orders for console and PC. Physical and digital editions.",
    price: "From $19 per game",
    quote: "I got my pre-order on launch day, sealed and on time.",
    quoteBy: "Rafi, console player",
  },
  {
    title: "Consoles and Gear",
    icon: "🕹️",
    description:
      "Consoles, controllers, headsets, keyboards and monitors from trusted brands.",
    price: "From $29 per item",
    quote: "The staff helped me pick a headset that fits my budget.",
    quoteBy: "Dina, streamer",
  },
  {
    title: "Trade-In and Repair",
    icon: "🛠️",
    description:
      "Trade your old games for store credit. We also fix controllers and clean consoles.",
    price: "Free quote",
    quote: "My controller drift was fixed in two days. Like new.",
    quoteBy: "Bayu, student",
  },
  {
    title: "Esports Events",
    icon: "🏆",
    description:
      "Weekly tournaments and LAN nights in our arena with prize pools for winners.",
    price: "Free entry for members",
    quote: "Best LAN night in the city. Great setup and friendly crowd.",
    quoteBy: "Kevin, team captain",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rafi Pratama",
    role: "Console player",
    quote:
      "PixelVault is my first stop for every new release. Fair prices and fast service.",
  },
  {
    name: "Dina Kusuma",
    role: "Streamer",
    quote:
      "They helped me build my whole streaming setup. I could not ask for better advice.",
  },
  {
    name: "Kevin Tan",
    role: "Esports team captain",
    quote:
      "Our team practices in their arena every week. The community here is amazing.",
  },
];

export const milestones: Milestone[] = [
  { year: "2017", text: "We opened our first small store with 200 games." },
  { year: "2019", text: "PixelVault launched its online store." },
  { year: "2022", text: "We hosted our first esports night with 64 players." },
  { year: "2025", text: "We reached 10,000 community members." },
];

export const values: Value[] = [
  {
    title: "Fair Play",
    text: "Honest prices, honest advice and a welcome for every kind of gamer.",
  },
  {
    title: "Community First",
    text: "We build events and spaces where players meet and grow together.",
  },
  {
    title: "Quality Gear",
    text: "Every product is checked before it reaches the shelf.",
  },
];

export const teamRoles: string[] = [
  "Store Manager",
  "Game Curator",
  "Hardware Specialist",
  "Esports Coordinator",
  "Repair Technician",
  "Community Manager",
  "Online Store Lead",
  "Customer Support",
];

export const teamBios: string[] = [
  "Runs daily store operations and loves open-world RPGs.",
  "Picks every title on our shelf and plays them all first.",
  "Knows every console spec and builds custom gaming PCs.",
  "Plans tournaments and keeps the brackets running smoothly.",
  "Brings broken controllers back to life in record time.",
  "Connects our members online and at every event.",
  "Keeps the web shop fast, stocked and easy to use.",
  "Answers your questions with patience and a smile.",
];