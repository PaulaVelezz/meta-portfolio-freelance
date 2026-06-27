import React from "react";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import FileUpload from "../common/FileUpload";

const StepBranding = ({ formik }) => {
  const { values, handleChange, handleBlur, errors, touched, setFieldValue } = formik;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground tracking-tight">
          Branding e Identidad
        </h2>
        <p className="text-sm text-text-secondary mt-1 font-body">
          Compartinos el ADN visual y conceptual de tu marca.
        </p>
      </div>

      <div className="flex flex-col gap-5 pt-2">
        <Textarea
          label="Descripción del negocio"
          name="businessDescription"
          placeholder="Resumí brevemente a qué se dedica tu empresa, qué productos o servicios vende..."
          required
          rows={3}
          value={values.businessDescription}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.businessDescription}
          touched={touched.businessDescription}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Input
            label="Misión"
            name="mission"
            placeholder="Propósito principal"
            value={values.mission}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.mission}
            touched={touched.mission}
          />

          <Input
            label="Visión"
            name="vision"
            placeholder="Hacia dónde se dirigen"
            value={values.vision}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.vision}
            touched={touched.vision}
          />

          <Input
            label="Valores"
            name="values"
            placeholder="Principios de la marca"
            value={values.values}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.values}
            touched={touched.values}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Input
            label="Personalidad de Marca"
            name="brandPersonality"
            placeholder="Ej. Minimalista, Elegante, Disruptiva"
            value={values.brandPersonality}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.brandPersonality}
            touched={touched.brandPersonality}
          />

          <Input
            label="Colores Actuales"
            name="currentColors"
            placeholder="Ej. #000000, Dorado, Beige"
            value={values.currentColors}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.currentColors}
            touched={touched.currentColors}
          />

          <Input
            label="Tipografía Actual"
            name="typography"
            placeholder="Ej. Inter, Helvetica, Sans-serif"
            value={values.typography}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.typography}
            touched={touched.typography}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FileUpload
            label="Logo Existente (opcional)"
            name="existingLogo"
            value={values.existingLogoName}
            onChange={(val) => setFieldValue("existingLogoName", val)}
            helperText="Formatos: PNG, SVG, AI, PDF (max 10MB)"
          />

          <Input
            label="Dominio deseado o actual"
            name="desiredDomain"
            placeholder="ejemplo.com"
            value={values.desiredDomain}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.desiredDomain}
            touched={touched.desiredDomain}
          />
        </div>

        <Input
          label="Links a Redes Sociales o Drives de Marca"
          name="socialLinks"
          placeholder="Instagram, Behance, Figma, Google Drive..."
          value={values.socialLinks}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.socialLinks}
          touched={touched.socialLinks}
        />
      </div>
    </div>
  );
};

export default StepBranding;
