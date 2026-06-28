import React from "react";
import SelectCard from "../common/SelectCard";
import Textarea from "../common/Textarea";
import {
  TrendingUp,
  UserCheck,
  Award,
  Zap,
  Eye,
  Briefcase,
  Rocket,
  PlusCircle,
} from "lucide-react";

const goalOptions = [
  { id: "Incrementar ventas", label: "Incrementar ventas", icon: TrendingUp },
  { id: "Generar leads", label: "Generar leads qualified", icon: UserCheck },
  {
    id: "Mejorar posicionamiento",
    label: "Mejorar posicionamiento",
    icon: Award,
  },
  { id: "Automatizar procesos", label: "Automatizar procesos", icon: Zap },
  { id: "Aumentar visibilidad", label: "Aumentar visibilidad", icon: Eye },
  { id: "Portafolio", label: "Presencia Digital", icon: Briefcase },
  { id: "Escalar el negocio", label: "Escalar el negocio", icon: Rocket },
  { id: "Otro", label: "Otro objetivo", icon: PlusCircle },
];

const StepGoals = ({ formik }) => {
  const { values, handleChange, handleBlur, errors, touched, setFieldValue } =
    formik;

  const toggleGoal = (goalId) => {
    const current = values.goals || [];
    if (current.includes(goalId)) {
      setFieldValue(
        "goals",
        current.filter((g) => g !== goalId),
      );
    } else {
      setFieldValue("goals", [...current, goalId]);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground tracking-tight">
          Objetivos y Visión
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <label className="text-xs font-medium text-text-secondary tracking-wide uppercase">
          ¿Qué querés lograr? (Seleccioná los que apliquen)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {goalOptions.map((opt) => (
            <SelectCard
              key={opt.id}
              label={opt.label}
              icon={opt.icon}
              isSelected={(values.goals || []).includes(opt.id)}
              onClick={() => toggleGoal(opt.id)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-4 border-t border-border/60">
        <Textarea
          label="¿Cómo vas a medir el éxito?"
          name="successMetrics"
          placeholder="Ej. Aumentar conversión un 30%, duplicar las consultas semanales, facturación..."
          rows={3}
          value={values.successMetrics}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.successMetrics}
          touched={touched.successMetrics}
        />
      </div>
    </div>
  );
};

export default StepGoals;
