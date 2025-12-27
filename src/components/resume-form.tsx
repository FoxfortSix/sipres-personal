import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FileUploader } from "./file-uploader";

interface ResumeFormProps {
  selectedWeek: string;
  onWeekChange: (val: string) => void;
  selectedFile: File | null;
  onFileSelect: (file: File | null) => void;
  onSubmit: () => void;
}

export function ResumeForm({
  selectedWeek,
  onWeekChange,
  selectedFile,
  onFileSelect,
  onSubmit,
}: ResumeFormProps) {
  const weeks = Array.from({ length: 14 }, (_, i) => (i + 1).toString());

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="week-select"
            className="text-base font-semibold text-slate-800"
          >
            Pilih Pertemuan
          </Label>
          <Select value={selectedWeek} onValueChange={onWeekChange}>
            <SelectTrigger id="week-select" className="w-full">
              <SelectValue placeholder="Pilih minggu pertemuan" />
            </SelectTrigger>
            <SelectContent>
              {weeks.map((week) => (
                <SelectItem key={week} value={week}>
                  Minggu ke-{week}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-slate-500">
            Pastikan memilih minggu yang sesuai dengan jadwal ceramah.
          </p>
        </div>

        <div className="space-y-2">
          <Label className="text-base font-semibold text-slate-800">
            File Resume
          </Label>
          <FileUploader
            selectedFile={selectedFile}
            onFileSelect={onFileSelect}
          />
        </div>

        <div className="pt-4">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 h-11 text-base"
            disabled={!selectedFile}
            onClick={onSubmit}
          >
            Upload Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
