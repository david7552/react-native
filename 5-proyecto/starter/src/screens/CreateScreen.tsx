import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import { useCreateItem } from '../hooks/useCreateItem';
import type { RootStackParamList } from '../navigation/types';

type CreateNavProp = NativeStackNavigationProp<RootStackParamList, 'Create'>;

export function CreateScreen(): React.JSX.Element {
  const navigation = useNavigation<CreateNavProp>();
  const { mutate, isPending, isError, error } = useCreateItem();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [displacement, setDisplacement] = useState('');
  const [price, setPrice] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = (): void => {
    const engineDisplacement = Number(displacement);
    const pricePerDay = Number(price);

    if (
      name.trim() === '' ||
      !Number.isFinite(engineDisplacement) || engineDisplacement <= 0 ||
      !Number.isFinite(pricePerDay) || pricePerDay <= 0
    ) {
      setFormError('Completa nombre, cilindraje y precio con valores válidos.');
      return;
    }
    setFormError(null);

    mutate(
      {
        name: name.trim(),
        description: description.trim() || undefined,
        engineDisplacement,
        pricePerDay,
        available: true,
      },
      { onSuccess: () => navigation.goBack() },
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.form}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Honda CBR190R"
          placeholderTextColor={COLORS.textMuted}
        />

        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          value={description}
          onChangeText={setDescription}
          placeholder="Opcional"
          placeholderTextColor={COLORS.textMuted}
          multiline
        />

        <Text style={styles.label}>Cilindraje (cc)</Text>
        <TextInput
          style={styles.input}
          value={displacement}
          onChangeText={setDisplacement}
          keyboardType="numeric"
          placeholder="190"
          placeholderTextColor={COLORS.textMuted}
        />

        <Text style={styles.label}>Precio por día</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          placeholder="25000"
          placeholderTextColor={COLORS.textMuted}
        />

        {formError && <Text style={styles.error}>{formError}</Text>}
        {isError && (
          <Text style={styles.error}>No se pudo crear: {error.message}</Text>
        )}

        <Pressable
          style={[styles.button, isPending && { opacity: 0.6 }]}
          onPress={handleSubmit}
          disabled={isPending}
        >
          {isPending ? (
            <ActivityIndicator color={COLORS.background} />
          ) : (
            <Text style={styles.buttonText}>Crear</Text>
          )}
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  form: { padding: SPACING.md, gap: SPACING.sm },
  label: { ...TYPOGRAPHY.label },
  input: {
    ...TYPOGRAPHY.body,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
  },
  multiline: { minHeight: 80, textAlignVertical: 'top' },
  error: { ...TYPOGRAPHY.caption, color: COLORS.error },
  button: {
    backgroundColor: COLORS.accent,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  buttonText: { ...TYPOGRAPHY.body, color: COLORS.background, fontWeight: '600' },
});