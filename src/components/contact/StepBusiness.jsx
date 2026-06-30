import React from "react";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import SelectCard from "../common/SelectCard";
import { Globe, MapPin, Flag } from "lucide-react";

const scopeOptions = [
  { id: "Local", label: "Local", icon: MapPin },
  { id: "Nacional", label: "Nacional", icon: Flag },
  { id: "Internacional", label: "Internacional", icon: Globe },
];

const StepBusiness = ({ formik }) => {
  const { values, handleChange, handleBlur, errors, touched, setFieldValue } =
    formik;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground tracking-tight">
          El Negocio
        </h2>
        <p className="text-sm text-text-secondary mt-1 font-body">
          Profundicemos en cómo opera tu empresa y cuál es tu mercado.
        </p>
      </div>

      <div className="flex flex-col gap-5 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Servicios Ofrecidos"
            name="offeredServices"
            placeholder="Ej. B2B Consulting, Software"
            value={values.offeredServices}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.offeredServices}
            touched={touched.offeredServices}
          />

          <Input
            label="Modelo de Negocio"
            name="businessModel"
            placeholder="Ej. Subscripción, Fee Mensual, Venta Directa"
            value={values.businessModel}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.businessModel}
            touched={touched.businessModel}
          />
        </div>

        <Textarea
          label="Público Objetivo / Cliente Ideal"
          name="targetAudience"
          placeholder="Describí quién es tu cliente principal (edad, perfil profesional, necesidades, dolores...)"
          required
          rows={3}
          value={values.targetAudience}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.targetAudience}
          touched={touched.targetAudience}
        />

        <div className="flex flex-col gap-2 pt-2">
          <label className="text-xs font-medium text-text-secondary tracking-wide uppercase">
            Cobertura de Mercado
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {scopeOptions.map((scope) => (
              <SelectCard
                key={scope.id}
                label={scope.label}
                icon={scope.icon}
                isSelected={values.marketScope === scope.id}
                onClick={() => setFieldValue("marketScope", scope.id)}
              />
            ))}
          </div>
        </div>

        <Textarea
          label="Mayor desafío comercial hoy"
          name="biggestChallenge"
          placeholder="¿Cuál es el principal cuello de botella o problema que enfrentan actualmente para crecer?"
          rows={4}
          value={values.biggestChallenge}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.biggestChallenge}
          touched={touched.biggestChallenge}
        />
      </div>
    </div>
  );
};

export default StepBusiness;
