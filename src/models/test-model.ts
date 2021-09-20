import { Column, PrimaryKey, Table, AutoIncrement, UpdatedAt, CreatedAt } from 'sequelize-typescript';
import { Model } from 'sequelize';

@Table({
  tableName: 'policy_summary',
  schema: 'plc',
  underscored: true,
  timestamps: false
})
export class PolicySummaryModel extends Model {

  @Column
  externalFlag: string;

  @Column
  policyNumber: string;

  @Column
  policyStartPeriod: Date;

  @Column
  policyEndPeriod: Date;

  @Column
  totalDeclaredValues: number;

  @Column
  deductibles: number;

  @Column
  averagePolicyRate: number;

  @Column
  commission: number;

  @Column
  premium: number;

  @Column
  netPremium: number;

  @Column
  totalClaimIncurred: number;

  @Column
  numberOfClaims: number;

  @Column
  lossRatio: number;

  @Column
  veroProportion: number;

  @Column
  veroPremium: number;

  @Column
  netveroPremium: number;

  @Column
  netveroClaimsCost: number;

  @Column
  netveroLossRetainedRatio: number;

  @Column
  facriPremium: number;

  @Column
  facriClaimsIncurred: number;

  @Column
  facriLossRatio: number;

  @Column
  surplusPremium: number;

  @Column
  surplusClaimsCost: number;

  @Column
  surplusLossRatio: number;

  @Column
  quotasharePremium: number;

  @Column
  quotashareClaimsCost: number;

  @Column
  quotashareLossRatio: number;

  @Column
  recoveriesxolTreatyrecovery: number;
}
