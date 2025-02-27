import DepartmentPicker from "@/components/department-picker";

export default function ComboboxPage() {
  return (
    <div>
      <DepartmentPicker selectedDepartment={{name: "Marketing", contact: "Durward Reynolds"}}  />
    </div>
  );
}