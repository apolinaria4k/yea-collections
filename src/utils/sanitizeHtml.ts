import DOMPurify from 'dompurify';
export const sanitizeHtml = (html: string): string => {
  return String(
    DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li', 'code', 'pre', 'a', 'span'],
      ALLOWED_ATTR: ['href', 'target', 'rel'],
    }),
  );
};
