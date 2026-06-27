import React from "react";
import Input from "../common/Input";

const StepContact = ({ formik }) => {
  const { values, handleChange, handleBlur, errors, touched } = formik;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground tracking-tight">
          Información de contacto
        </h2>
        <p className="text-sm text-text-secondary mt-1 font-body">
          Contanos quién sos y cómo podemos ponernos en contacto con vos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        <div className="md:col-span-2">
          <Input
            label="Empresa"
            name="company"
            placeholder="Ej. Acme Corp / Tu Marca"
            required
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.company}
            touched={touched.company}
          />
        </div>

        <Input
          label="Nombre"
          name="firstName"
          placeholder="Tu nombre"
          required
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.firstName}
          touched={touched.firstName}
        />

        <Input
          label="Apellido"
          name="lastName"
          placeholder="Tu apellido"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.lastName}
          touched={touched.lastName}
        />

        <Input
          label="Cargo / Rol"
          name="position"
          placeholder="Ej. CEO, Founder, Director de Marketing"
          value={values.position}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.position}
          touched={touched.position}
        />

        <Input
          label="Email de contacto"
          name="email"
          type="email"
          placeholder="tu@empresa.com"
          required
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          touched={touched.email}
        />

        <Input
          label="Teléfono / WhatsApp"
          name="phone"
          type="tel"
          placeholder="+54 9 11 1234-5678"
          required
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phone}
          touched={touched.phone}
        />

        <Input
          label="Ciudad"
          name="city"
          placeholder="Ej. Buenos Aires"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.city}
          touched={touched.city}
        />

        <Input
          label="País"
          name="country"
          placeholder="Ej. Argentina"
          value={values.country}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.country}
          touched={touched.country}
        />

        <Input
          label="Sitio Web Actual"
          name="website"
          placeholder="https://tudominio.com"
          value={values.website}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.website}
          touched={touched.website}
        />

        <Input
          label="LinkedIn"
          name="linkedin"
          placeholder="linkedin.com/in/perfil"
          value={values.linkedin}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.linkedin}
          touched={touched.linkedin}
        />

        <Input
          label="Instagram"
          name="instagram"
          placeholder="@tumarca"
          value={values.instagram}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.instagram}
          touched={touched.instagram}
        />
      </div>
    </div>
  );
};

export default StepContact;
