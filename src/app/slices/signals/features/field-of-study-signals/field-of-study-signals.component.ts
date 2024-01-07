import { ChangeDetectionStrategy, Component } from '@angular/core';
import { materialModules } from '../../../../shared/utils/material/material-module';

@Component({
  selector: 'app-field-of-study-signals',
  standalone: true,
  imports: [...materialModules],
  templateUrl: './field-of-study-signals.component.html',
  styleUrl: './field-of-study-signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldOfStudySignalsComponent {}
