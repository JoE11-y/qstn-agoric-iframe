/**
 * Install SES Lockdown
 *
 * CRITICAL: This file must be imported FIRST before any other code runs.
 * SES lockdown hardens JavaScript built-ins to prevent prototype pollution.
 */

import 'ses'; // adds lockdown, harden, and Compartment
import '@endo/eventual-send/shim.js'; // adds support needed by E

console.log('[Agoric Sandbox] Installing SES lockdown...');

lockdown({
  errorTaming: 'unsafe', // Allow detailed error messages for debugging
  overrideTaming: 'severe', // Prevent prototype modifications
  consoleTaming: 'unsafe', // Allow console.log for debugging
  stackFiltering: 'verbose', // Show full stack traces
});

Error.stackTraceLimit = Infinity;

console.log('[Agoric Sandbox] SES lockdown installed successfully');
