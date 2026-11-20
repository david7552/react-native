import { z } from 'zod';
export type ItemFormInput = z.input<typeof itemSchema>;
export type ItemFormData = z.infer<typeof itemSchema>;
export const itemSchema = z.object({
  name: z
    .string()
    .min(1, 'El modelo es requerido')
    .max(80, 'Máx. 80 caracteres'),

  brand: z
    .string()
    .min(1, 'La marca es requerida')
    .max(40, 'Máx. 40 caracteres'),

  pricePerDay: z.coerce
    .number({ error: 'Ingresa un número válido' })
    .positive('El precio por día debe ser mayor que 0'),

  description: z
    .string()
    .max(500, 'Máx. 15 caracteres')
    .optional()
    .or(z.literal('')),
});
