import { Params, TerraformCloudData } from './TerraformCloudData'

export type Organization = TerraformCloudData<OrganizationAttributes>

export interface OrganizationAttributes {
  name: string
  externalid: string
  email: string
}

// export type OrganizationRequest = Params<'organizations', OrganizationRequestAttributes>

// export interface OrganizationRequestAttributes {
//   name: string
//   externalid: string
//   email: string
// }

// export interface WorkspaceVcsRepoCreate {
//   oauthTokenId: string
//   branch?: string
//   ingressSubmodules?: boolean
//   identifier: string
// }

// export type Workspace = TerraformCloudData<WorkspaceAttributes>

// export interface WorkspaceAttributes {
//   autoApply: boolean
//   allowDestroyPlan: boolean
//   canQueueDestroyPlan: boolean
//   createdAt: Date
//   environment: string
//   fileTriggersEnabled: boolean
//   locked: boolean
//   name: string
//   permissions: WorkspacePermissions
//   queueAllRuns: boolean
//   terraformVersion: string
//   triggerPrefixes: []
//   vcsRepo: null
//   workingDirectory: string
//   executionMode: 'remote' | 'local' | 'agent'
// }

// export interface WorkspacePermissions {
//   canUpdate: boolean
//   canDestroy: boolean
//   canQueueDestroy: boolean
//   canQueueRun: boolean
//   canUpdateVariable: boolean
//   canLock: boolean
//   canReadSettings: boolean
// }
