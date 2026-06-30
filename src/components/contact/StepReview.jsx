import React from "react";
import { Edit2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const StepReview = ({ formik, onEditStep }) => {
  const { values, setFieldValue, errors, touched } = formik;

  const renderSectionHeader = (title, stepNumber) => (
    <div className="flex items-center justify-between pb-3 border-b border-border/60">
      <h3 className="text-base font-bold font-heading text-foreground">
        {title}
      </h3>
      <button
        type="button"
        onClick={() => onEditStep(stepNumber)}
        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
      >
        <Edit2 className="w-3.5 h-3.5" />
        <span>Editar</span>
      </button>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground tracking-tight">
          Revisión final
        </h2>
        <p className="text-sm text-text-secondary mt-1 font-body">
          Repasá la información recopilada antes de enviar tu proyecto.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Step 1: Contact */}
        <div className="p-5 rounded-2xl border border-border bg-surface/80 flex flex-col gap-3">
          {renderSectionHeader("01 Contacto", 1)}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4 text-sm">
            <div>
              <span className="text-text-muted text-xs block">Empresa</span>
              <span className="font-semibold text-foreground">
                {values.company || "-"}
              </span>
            </div>
            <div>
              <span className="text-text-muted text-xs block">
                Nombre completo
              </span>
              <span className="font-medium text-foreground">
                {`${values.firstName} ${values.lastName}`.trim() || "-"}
              </span>
            </div>
            <div>
              <span className="text-text-muted text-xs block">Email</span>
              <span className="font-medium text-foreground">
                {values.email || "-"}
              </span>
            </div>
            <div>
              <span className="text-text-muted text-xs block">Teléfono</span>
              <span className="font-medium text-foreground">
                {values.phone || "-"}
              </span>
            </div>
            <div>
              <span className="text-text-muted text-xs block">Cargo</span>
              <span className="font-medium text-foreground">
                {values.position || "-"}
              </span>
            </div>
            <div>
              <span className="text-text-muted text-xs block">Ubicación</span>
              <span className="font-medium text-foreground">
                {`${values.city} ${values.country}`.trim() || "-"}
              </span>
            </div>
          </div>
        </div>

        {/* Step 2: Services */}
        <div className="p-5 rounded-2xl border border-border bg-surface/80 flex flex-col gap-3">
          {renderSectionHeader("02 Servicios & Presupuesto", 2)}
          <div className="flex flex-col gap-2 text-sm">
            <div>
              <span className="text-text-muted text-xs block mb-1">
                Servicios seleccionados
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(values.services || []).length > 0 ? (
                  values.services.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg bg-primary-50 text-primary text-xs font-medium border border-primary/20"
                    >
                      {s}
                    </span>
                  ))
                ) : (
                  <span className="text-text-muted">-</span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div>
                <span className="text-text-muted text-xs block">
                  Presupuesto
                </span>
                <span className="font-medium text-foreground">
                  {values.budget || "-"}
                </span>
              </div>
              <div>
                <span className="text-text-muted text-xs block">
                  Plazo estimado
                </span>
                <span className="font-medium text-foreground">
                  {values.timeline || "-"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Branding */}
        <div className="p-5 rounded-2xl border border-border bg-surface/80 flex flex-col gap-3">
          {renderSectionHeader("03 Branding e Identidad", 3)}
          <div className="flex flex-col gap-2 text-sm">
            <div>
              <span className="text-text-muted text-xs block">
                Descripción del negocio
              </span>
              <p className="font-medium text-foreground text-xs leading-relaxed mt-0.5">
                {values.businessDescription || "-"}
              </p>
            </div>
            {values.existingLogoName && (
              <div>
                <span className="text-text-muted text-xs block">
                  Logo cargado
                </span>
                <span className="font-medium text-foreground text-xs">
                  {values.existingLogoName}
                </span>
              </div>
            )}
            {values.brandKit && (
              <div>
                <span className="text-text-muted text-xs block">
                  Kit de identidad cargado
                </span>
                <span className="font-medium text-foreground text-xs">
                  {values.brandKit}
                </span>
              </div>
            )}
            <div>
              <span className="text-text-muted text-xs block">
                Dominio deseado
              </span>
              <p className="font-medium text-foreground text-xs leading-relaxed mt-0.5">
                {values.desiredDomain || "-"}
              </p>
            </div>
            <div>
              <span className="text-text-muted text-xs block">
                Redes sociales
              </span>
              <span className="font-medium text-foreground">
                {values.socialLinks || "-"}
              </span>
            </div>
          </div>
        </div>

        {/* Step 4: Business */}
        <div className="p-5 rounded-2xl border border-border bg-surface/80 flex flex-col gap-3">
          {renderSectionHeader("04 El Negocio", 4)}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-text-muted text-xs block">
                Servicios ofrecidos
              </span>
              <p className="font-medium text-foreground text-xs">
                {values.offeredServices || "-"}
              </p>
            </div>
            <div>
              <span className="text-text-muted text-xs block">
                Modelo de negocio
              </span>
              <p className="font-medium text-foreground text-xs">
                {values.businessModel || "-"}
              </p>
            </div>
            <div>
              <span className="text-text-muted text-xs block">
                Público Objetivo
              </span>
              <p className="font-medium text-foreground text-xs">
                {values.targetAudience || "-"}
              </p>
            </div>
            <div>
              <span className="text-text-muted text-xs block">Cobertura</span>
              <span className="font-medium text-foreground text-xs">
                {values.marketScope || "-"}
              </span>
            </div>
            <div>
              <span className="text-text-muted text-xs block">
                Principal desafío
              </span>
              <p className="font-medium text-foreground text-xs">
                {values.biggestChallenge || "-"}
              </p>
            </div>
          </div>
        </div>

        {/* Step 5: Goals */}
        <div className="p-5 rounded-2xl border border-border bg-surface/80 flex flex-col gap-3">
          {renderSectionHeader("05 Objetivos", 5)}
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex flex-wrap gap-1.5">
              {(values.goals || []).map((g) => (
                <span
                  key={g}
                  className="px-2.5 py-1 rounded-lg bg-muted text-foreground text-xs font-medium"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Step 6: Competition */}
        <div className="p-5 rounded-2xl border border-border bg-surface/80 flex flex-col gap-3">
          {renderSectionHeader("06 Competencia", 6)}
          <div className="text-sm">
            <span className="text-text-muted text-xs block">
              Competidores cargados
            </span>
            <span className="font-medium text-foreground text-xs">
              {(values.competitors || [])
                .filter((c) => c.name)
                .map((c) => c.name)
                .join(", ") || "Ninguno detallado"}
            </span>
          </div>
          <div className="text-sm">
            <span className="text-text-muted text-xs block">
              Diferenciadores cargados
            </span>
            <span className="font-medium text-foreground text-xs">
              {(values.uniqueValues || [])
                .filter((v) => v.trim() !== "")
                .join(", ") || "Ninguno detallado"}
            </span>
          </div>
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="pt-4 flex flex-col gap-2">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(e) => setFieldValue("consent", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
          />
          <span className="text-sm text-foreground font-body">
            Acepto ser contactado por N/N Studio para recibir una propuesta
            estratégica sobre mi proyecto.
          </span>
        </label>
        <AnimatePresence>
          {touched.consent && errors.consent && (
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-medium text-destructive pl-7"
            >
              {errors.consent}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StepReview;
