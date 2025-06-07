export type Priority = 'high' | 'medium' | 'low'

export interface NoteProps {
    id?: number | string;
    text: string;
    priority?: Priority
}

export type NoteType = {
    id: string;
    text: string;
    priority: Priority
}