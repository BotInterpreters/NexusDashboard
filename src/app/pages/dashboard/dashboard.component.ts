import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  selectedAgent = 'ALL';

  logs = [
    {
      time: '09:14:02',
      agent: 'OOS_AGENT',
      message:
        'Canceled Shopee Order #1234 → Taguig Hub Stock Available → Viber Offer Sent',
      orderReference: '2026093A9R2P04X (Shopee #1234)',
      customer: 'Maria Santos',
      action:
        'Triggered out-of-stock recovery workflow and customer outreach',
    },

    {
      time: '09:14:15',
      agent: 'CRM_AGENT',
      message:
        'Suppression Active on Customer: Maria Santos (ID: 9812)',
      orderReference: 'CRM-9812',
      customer: 'Maria Santos',
      action:
        'Customer suppression guardrail activated',
    },

    {
      time: '09:14:48',
      agent: 'SWAP_AGENT',
      message:
        'Option B Selected → GCash B2B Disbursement Executed (PHP 2,500) → Voucher Issued',
      orderReference: 'SWAP-2500-PHP',
      customer: 'Maria Santos',
      action:
        'GCash liquidity swap executed and recovery voucher generated',
    },

    {
      time: '09:15:10',
      agent: 'SWAP_AGENT',
      message:
        'Viber Delivery Receipt Confirmed → Customer Maria Santos opened Recovery Voucher',
      orderReference: 'VBR-9812',
      customer: 'Maria Santos',
      action:
        'Recovery voucher delivery confirmed',
    },

    {
      time: '09:16:22',
      agent: 'OOS_AGENT',
      message:
        'Shopee Order #1239 Canceled by Platform → Taguig Hub Batch Allocation Reserved → WhatsApp Sent',
      orderReference: '2026093A9R2P11X (Shopee #1239)',
      customer: 'Maria Santos',
      action:
        'Stockout recovery workflow initiated and alternate fulfillment reserved',
    },

    {
      time: '09:17:05',
      agent: 'SWAP_AGENT',
      message:
        'Option A Selected → Lalamove API Express Dispatch Booked → Rider Assigned (LLM-8912)',
      orderReference: 'LLM-8912',
      customer: 'Maria Santos',
      action:
        'Express delivery dispatch booked and rider assigned',
    },
  ];

  selectedLog = this.logs[0];

  get filteredLogs() {
    if (this.selectedAgent === 'ALL') {
      return this.logs;
    }

    return this.logs.filter(
      (log) => log.agent === this.selectedAgent
    );
  }

  selectLog(log: (typeof this.logs)[number]) {
    this.selectedLog = log;
  }

  resolutionDistribution = [
  {
    option: 'Option B',
    title: 'Instant GCash Refund + ₱500 Voucher',
    percentage: 68,
    orders: 127,
    description:
      'Preferred by shoppers seeking liquidity with conversion-sensitive direct store credit.',
  },
  {
    option: 'Option A',
    title: 'Taguig Hub Same-Day Express Delivery',
    percentage: 32,
    orders: 60,
    description:
      'Preferred by loyal customers who want the skincare set delivered today without reordering friction.',
  },
];

webhookHealth = [
  {
    name: 'Shopee Open Platform API',
    status: 'Healthy',
    detail: 'Latency: 42ms',
    meta: 'Auto-Cancel Hook',
  },
  {
    name: 'GCash Enterprise Disbursement API',
    status: 'Healthy',
    detail: 'Latency: 118ms',
    meta: 'Ref: 0002-CORP',
  },
  {
    name: 'Viber Business Messaging Gateway',
    status: 'Healthy',
    detail: 'Delivery: 99.4%',
    meta: 'VIP Recovery Bot',
  },
  {
    name: 'Klaviyo / Braze CRM Webhook',
    status: 'Healthy',
    detail: 'Audience Shield',
    meta: 'Instant Mute',
  },
];
}