import { sub } from "date-fns";

export type NotificationType =
  | "friend"
  | "project"
  | "file"
  | "tags"
  | "payment"
  | "order"
  | "chat"
  | "mail"
  | "delivery";

export type NotificationItem = {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  createdAt: Date;
  isUnRead: boolean;
};

export const NOTIFICATIONS: NotificationItem[] = [
  {
    id: "1",
    type: "friend",
    title: "طلب صداقة جديد",
    description: "أحمد محمد قام بإرسال طلب صداقة إليك",
    createdAt: sub(new Date(), { minutes: 5 }),
    isUnRead: true,
  },
  {
    id: "2",
    type: "project",
    title: "تحديث المشروع",
    description: "تم تحديث مشروع التصميم الجديد بنجاح",
    createdAt: sub(new Date(), { hours: 1 }),
    isUnRead: true,
  },
  {
    id: "3",
    type: "file",
    title: "مستند جديد",
    description: "تم رفع ملف التقرير الشهري بواسطة سارة",
    createdAt: sub(new Date(), { hours: 3 }),
    isUnRead: true,
  },
  {
    id: "4",
    type: "tags",
    title: "تم وضع علامة عليك",
    description: "تم وضع علامة عليك في منشور новое",
    createdAt: sub(new Date(), { hours: 5 }),
    isUnRead: false,
  },
  {
    id: "5",
    type: "payment",
    title: "دفعة مستلمة",
    description: "تم استلام دفعة بقيمة ٢,٥٠٠ ريال من العميل",
    createdAt: sub(new Date(), { days: 1 }),
    isUnRead: false,
  },
  {
    id: "6",
    type: "order",
    title: "طلب جديد",
    description: "لديك طلب جديد رقم #١٢٣٤٥ بقيمة ٨٩٩ ريال",
    createdAt: sub(new Date(), { days: 2 }),
    isUnRead: false,
  },
  {
    id: "7",
    type: "chat",
    title: "رسالة جديدة",
    description: "لديك رسالة جديدة من فريق الدعم الفني",
    createdAt: sub(new Date(), { days: 3 }),
    isUnRead: false,
  },
  {
    id: "8",
    type: "mail",
    title: "بريد إلكتروني",
    description: "تم إرسال عرض سعر جديد إلى بريدك الإلكتروني",
    createdAt: sub(new Date(), { days: 5 }),
    isUnRead: false,
  },
  {
    id: "9",
    type: "delivery",
    title: "توصيل الطلب",
    description: "تم توصيل الطلب رقم #٦٧٨٩٠ إلى العنوان المحدد",
    createdAt: sub(new Date(), { days: 7 }),
    isUnRead: false,
  },
];

export const TYPE_CONFIG: Record<
  NotificationType,
  { icon: string; color: string }
> = {
  friend: { icon: "eva:people-fill", color: "#006838" },
  project: { icon: "eva:folder-outline", color: "#FFAB00" },
  file: { icon: "eva:file-outline", color: "#00B8D9" },
  tags: { icon: "eva:pricetags-outline", color: "#22C55E" },
  payment: { icon: "eva:credit-card-outline", color: "#FF3B30" },
  order: { icon: "eva:shopping-bag-outline", color: "#006838" },
  chat: { icon: "eva:message-circle-outline", color: "#FFAB00" },
  mail: { icon: "eva:email-outline", color: "#00B8D9" },
  delivery: { icon: "eva:car-outline", color: "#22C55E" },
};
