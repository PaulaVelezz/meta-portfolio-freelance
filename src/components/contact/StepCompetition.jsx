import React from "react";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import { Plus, Trash2, ShieldCheck } from "lucide-react";

const StepCompetition = ({ formik }) => {
  const { values, handleChange, handleBlur, setFieldValue } = formik;

  const competitors = values.competitors || [];
  const uniqueValues = values.uniqueValues || ["", "", "", "", "", ""];

  const addCompetitor = () => {
    setFieldValue("competitors", [
      ...competitors,
      { name: "", website: "", pros: "", cons: "" },
    ]);
  };

  const removeCompetitor = (index) => {
    if (competitors.length === 1) return;
    const updated = competitors.filter((_, i) => i !== index);
    setFieldValue("competitors", updated);
  };

  const handleCompetitorChange = (index, field, val) => {
    const updated = [...competitors];
    updated[index] = { ...updated[index], [field]: val };
    setFieldValue("competitors", updated);
  };

  const handleUniqueValueChange = (index, val) => {
    const updated = [...uniqueValues];
    updated[index] = val;
    setFieldValue("uniqueValues", updated);
  };

  return (
    <div className="flex flex-col gap-9">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground tracking-tight">
          Competencia y Diferenciadores
        </h2>
        <p className="text-sm text-text-secondary mt-1 font-body">
          Analizar a tus competidores nos permite encontrar tu propuesta de
          valor única.
        </p>
      </div>

      {/* Dynamic Competitors List */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold font-heading text-foreground">
            Competidores principales
          </h3>
          <button
            type="button"
            onClick={addCompetitor}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary-50/50 px-3.5 py-1.5 text-xs font-semibold text-primary hover:bg-primary-50 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Agregar competidor</span>
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {competitors.map((comp, index) => (
            <div
              key={index}
              className="relative p-5 rounded-2xl border border-border bg-surface/60 flex flex-col gap-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono">
                  Competidor #{index + 1}
                </span>
                {competitors.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCompetitor(index)}
                    className="p-1 rounded-md text-text-muted hover:text-destructive hover:bg-destructive-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Nombre del competidor"
                  name={`comp_name_${index}`}
                  placeholder="Ej. Empresa X"
                  value={comp.name}
                  onChange={(e) =>
                    handleCompetitorChange(index, "name", e.target.value)
                  }
                  onBlur={handleBlur}
                />

                <Input
                  label="Sitio web"
                  name={`comp_web_${index}`}
                  placeholder="https://competidor.com"
                  value={comp.website}
                  onChange={(e) =>
                    handleCompetitorChange(index, "website", e.target.value)
                  }
                  onBlur={handleBlur}
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Textarea
                  label="¿Qué te gusta de ellos?"
                  name={`comp_pros_${index}`}
                  placeholder="Aspectos positivos, diseño, comunicación..."
                  rows={2}
                  value={comp.pros}
                  onChange={(e) =>
                    handleCompetitorChange(index, "pros", e.target.value)
                  }
                  onBlur={handleBlur}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unique Value Propositions (6 independent inputs) */}
      <div className="flex flex-col gap-4 pt-6 border-t border-border/60">
        <div>
          <h3 className="text-lg font-bold font-heading text-foreground flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            ¿Qué hace diferente a tu empresa?
          </h3>
          <p className="text-xs text-text-secondary mt-0.5 font-body">
            Ingresá hasta 6 factores diferenciadores de tu marca frente al
            mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <Input
              key={idx}
              label={`Valor Único #${idx + 1}`}
              name={`uniqueValue_${idx}`}
              placeholder={`Ej. Atención personalizada 24/7, Tecnología propia...`}
              value={uniqueValues[idx] || ""}
              onChange={(e) => handleUniqueValueChange(idx, e.target.value)}
              onBlur={handleBlur}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepCompetition;
