/**
 * Utility functions for CampusVibe
 * Helpful for beginners to understand helper modularization
 */

export function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export function formatTime(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  } catch {
    return dateStr;
  }
}

export function formatDateTime(dateStr: string): string {
  return `${formatDate(dateStr)} • ${formatTime(dateStr)}`;
}

export function formatCurrency(amount: number): string {
  if (amount === 0) return 'Free';
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function getDaysLeft(deadlineStr: string): { text: string; isUrgent: boolean; isExpired: boolean } {
  try {
    const deadline = new Date(deadlineStr).getTime();
    const now = new Date().getTime();
    const diffMs = deadline - now;
    
    if (diffMs <= 0) {
      return { text: 'Registration Closed', isUrgent: false, isExpired: true };
    }
    
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      return { text: 'Closes today!', isUrgent: true, isExpired: false };
    }
    if (diffDays <= 3) {
      return { text: `${diffDays} days left`, isUrgent: true, isExpired: false };
    }
    return { text: `${diffDays} days left`, isUrgent: false, isExpired: false };
  } catch {
    return { text: 'Open', isUrgent: false, isExpired: false };
  }
}
