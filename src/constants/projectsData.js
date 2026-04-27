import { Assets } from './assets.js';

/**
 * Single source of truth for portfolio projects (carousel, grid, detail pages).
 */
export const projects = [
    {
        id: 'quranly',
        title: 'Quran by Quranly',
        tagline: 'Habit-building Qur’an reading, progress, and community',
        carouselCaption:
            'Goals, streaks, recitation audio, translations, and light friend accountability keep Qur’an reading steady when busy weeks try to quietly erase your momentum overnight.',
        shortDescription:
            'A habit-first Quran experience with goals, streaks, audio recitation, translations, and social accountability—built to make daily reading stick.',
        image: Assets.logos.quranlySquare,
        thumb: Assets.logos.quranlySquare,
        year: '2024',
        role: 'Mobile Engineer',
        detailTheme: {
            accentFrom: '#8B5CF6',
            accentTo: '#C4B5FD',
        },
        stack: ['Flutter', 'Firebase', 'RevenueCat', 'OneSignal'],
        storeLinks: {
            googlePlay: 'https://play.google.com/store/apps/details?id=com.quranly.app&hl=en',
            appStore: 'https://apps.apple.com/us/app/quran-by-quranly/id1559233786',
        },
        mockupAside:
            'Reading levels, streaks, and gentle nudges turn the Qur’an into a repeatable daily habit—without losing depth for serious students.',
        mockups: [
            { src: Assets.mockups.quranly1, alt: 'Quranly on device' },
            { src: Assets.mockups.quranly2, alt: 'Quranly on device' },
        ],
        highlights: [
            'Shipped progress surfaces for time read, verses completed, and streak health.',
            'Integrated audio, word-by-word modes, and translations for accessible study.',
            'Built social loops—friends, leaderboards, and goals—that reinforce consistency.',
        ],
        snippets: [
            {
                title: 'Daily reading goal state',
                language: 'dart',
                code: `class ReadingGoal {
  const ReadingGoal({
    required this.targetMinutes,
    required this.completedMinutes,
    required this.streakDays,
  });

  double get progress =>
      targetMinutes == 0 ? 0 : (completedMinutes / targetMinutes).clamp(0, 1);

  bool get metToday => completedMinutes >= targetMinutes;
}`,
            },
            {
                title: 'Streak rollover at local midnight',
                language: 'dart',
                code: `DateTime nextLocalMidnight(DateTime now) {
  final loc = now.toLocal();
  return DateTime(loc.year, loc.month, loc.day).add(const Duration(days: 1));
}`,
            },
        ],
    },
    {
        id: 'myskool',
        title: 'MySkool',
        tagline: 'LMS with biometric attendance',
        carouselCaption:
            'Staff, students, and guardians see dashboards, lesson tooling, and biometric attendance that keeps recording when campus Wi-Fi drops during busy school days.',
        shortDescription: 'School LMS platform with biometric attendance.',
        image: Assets.logos.myskoolBanner,
        detailHeroImage: Assets.logos.myskoolImage,
        thumb: Assets.logos.myskoolImage,
        year: '2021',
        role: 'Flutter Developer',
        detailTheme: {
            accentFrom: '#0284C7',
            accentTo: '#4F46E5',
        },
        stack: ['Flutter', 'Firebase', 'Node.js', 'Azure'],
        storeLinks: {
            googlePlay: 'https://play.google.com/store/apps/details?id=com.myskool.pk&hl=en',
            appStore: 'https://apps.apple.com/pk/app/myskool-app/id6469148806',
        },
        mockupAside:
            'Role-aware dashboards and attendance flows used every day by staff and families—built for quick scans and low cognitive load on small screens.',
        mockups: [
            { src: Assets.mockups.myskool1, alt: 'MySkool on device' },
            { src: Assets.mockups.myskool2, alt: 'MySkool on device' },
        ],
        highlights: [
            'Implemented role-based dashboards for staff, students, and guardians.',
            'Integrated biometric hardware SDKs with offline-first attendance sync.',
            'Reduced support tickets with resilient sync and visible sync status.',
        ],
        snippets: [
            {
                title: 'Attendance record model',
                language: 'dart',
                code: `class AttendanceRecord {
  const AttendanceRecord({
    required this.studentId,
    required this.windowStart,
    required this.source,
    this.deviceFingerprint,
  });

  final String studentId;
  final DateTime windowStart;
  final AttendanceSource source;
  final String? deviceFingerprint;

  Map<String, dynamic> toFirestore() => {
        'studentId': studentId,
        'windowStart': windowStart.toUtc(),
        'source': source.name,
        'deviceFingerprint': deviceFingerprint,
      };
}`,
            },
            {
                title: 'Batch sync queue',
                language: 'dart',
                code: `Future<void> flushQueue(Queue<AttendanceWrite> pending) async {
  while (pending.isNotEmpty) {
    final batch = pending.take(25).toList();
    await firestore.runTransaction((tx) async {
      for (final write in batch) {
        tx.set(write.ref, write.payload, SetOptions(merge: true));
      }
    });
    for (final _ in batch) pending.removeFirst();
  }
}`,
            },
        ],
    },
    {
        id: 'nextride',
        title: 'nextRIDE',
        tagline: 'Smart rides—book ahead or hire by the hour',
        carouselCaption:
            'Transparent fares, advance booking, live trip status, and saved cards support daily trips and hourly hires without juggling clunky checkout paths or confusing extra steps.',
        shortDescription:
            'Consumer ride app to request trips, schedule in advance, and book hourly drivers—clear pricing, live trip state, and flows tuned for repeat daily use.',
        image: Assets.logos.nextrideSquare,
        thumb: Assets.logos.nextrideSquare,
        year: '2025',
        role: 'Mobile Engineer',
        detailTheme: {
            accentFrom: '#22C55E',
            accentTo: '#166534',
        },
        stack: ['Flutter', 'Firebase', 'Stripe', 'Google Maps'],
        storeLinks: {
            googlePlay: 'https://play.google.com/store/apps/details?id=com.nextridecustomer&hl=en',
            appStore: 'https://apps.apple.com/us/app/nextride-request-a-ride/id6746804686',
        },
        mockupAside:
            'Pickup, pricing, and trip status stay legible in motion—so riders trust the ETA and drivers get fewer support pings.',
        mockups: [
            { src: Assets.mockups.nextride1, alt: 'nextRIDE on device' },
            { src: Assets.mockups.nextride2, alt: 'nextRIDE on device' },
        ],
        highlights: [
            'Implemented request and scheduling flows with transparent fare estimates.',
            'Modeled the full ride lifecycle against a WebSocket feed—reconnect, seq gaps, and server-driven transitions.',
            'Integrated secure in-app payments and saved payment methods for faster checkout.',
        ],
        snippets: [
            {
                title: 'WebSocket ride channel + gap sync',
                language: 'dart',
                code: `void attachRideChannel(String tripId, String sessionToken) {
  _socket = io.io(
    Env.rideSocketBase,
    OptionBuilder()
        .setTransports(['websocket'])
        .setQuery({'tripId': tripId, 'token': sessionToken})
        .enableReconnection()
        .build(),
  );

  _socket!.on('ride_event', (dynamic raw) {
    if (raw is! Map) return;
    final event = RideServerEvent.fromJson(Map<String, dynamic>.from(raw));
    final next = RideStateReducer.apply(_ride.value, event);
    if (next != null) _ride.add(next);
  });

  _socket!.onReconnect((_) {
    _socket!.emit('sync_after_gap', {
      'tripId': tripId,
      'lastSeq': _ride.value.lastAppliedSeq,
    });
  });
}`,
            },
            {
                title: 'Reducer over full ride lifecycle (socket-fed)',
                language: 'dart',
                code: `class RideStateReducer {
  static RideSnapshot? apply(RideSnapshot cur, RideServerEvent e) {
    if (e.seq <= cur.lastAppliedSeq && e.kind != EventKind.forceReset) {
      return null;
    }

    switch ((cur.lifecycle, e.kind)) {
      case (RideLifecycle.requested, EventKind.poolDispatch):
        return cur.copyWith(
          lifecycle: RideLifecycle.searching,
          fareLock: e.quotedFare,
          lastAppliedSeq: e.seq,
        );
      case (RideLifecycle.searching, EventKind.driverAssigned):
        return cur.copyWith(
          lifecycle: RideLifecycle.driverEnRoute,
          driver: e.driver,
          vehicle: e.vehicle,
          lastAppliedSeq: e.seq,
        );
      case (RideLifecycle.driverEnRoute, EventKind.driverLocationTick):
        return cur.copyWith(
          driverPosition: e.latLng,
          pickupEtaSeconds: e.etaSeconds,
          lastAppliedSeq: e.seq,
        );
      case (RideLifecycle.driverEnRoute, EventKind.passengerPickedUp):
        return cur.copyWith(
          lifecycle: RideLifecycle.onTrip,
          route: e.activeRoute,
          lastAppliedSeq: e.seq,
        );
      case (RideLifecycle.onTrip, EventKind.routeProgress):
        return cur.copyWith(
          remainingPolyline: e.polyline,
          dropoffEtaSeconds: e.etaSeconds,
          lastAppliedSeq: e.seq,
        );
      case (_, EventKind.tripClosed):
        return cur.copyWith(
          lifecycle: RideLifecycle.completed,
          receipt: e.receipt,
          lastAppliedSeq: e.seq,
        );
      default:
        return cur.copyWith(lastAppliedSeq: e.seq);
    }
  }
}`,
            },
        ],
    },
    {
        id: 'scope-inspect',
        title: 'Scope Inspect',
        tagline: 'Operating system for home inspection businesses',
        carouselCaption:
            'Structured reports with photos, scheduling, agreements, Stripe billing, and offline-first sync let inspectors finish jobs even when basements and crawlspaces kill signal.',
        shortDescription:
            'End-to-end field and back-office platform for home inspectors: structured reports, scheduling, agreements, invoicing with Stripe, and cloud sync with offline support.',
        image: Assets.logos.scopeInspectSquare,
        thumb: Assets.logos.scopeInspectSquare,
        year: '2024',
        role: 'Mobile Engineer',
        detailTheme: {
            accentFrom: '#0EA5E9',
            accentTo: '#1E3A8A',
        },
        stack: ['Flutter', 'Firebase', 'Stripe', 'Node.js'],
        storeLinks: {
            googlePlay: 'https://play.google.com/store/apps/details?id=app.com.scope&hl=en',
            appStore: 'https://apps.apple.com/us/app/scope-inspect-home-inspection/id1640709502',
        },
        mockupAside:
            'Inspectors capture evidence fast on-site—then invoices, revenue, and client comms stay tied to the same job without switching tools.',
        mockups: [
            { src: Assets.mockups.scope1, alt: 'Scope Inspect on device' },
            { src: Assets.mockups.scope2, alt: 'Scope Inspect on device' },
        ],
        highlights: [
            'Delivered mobile report flows with photos, annotations, and reusable templates.',
            'Connected scheduling, agreements, and Stripe-backed invoicing in one pipeline.',
            'Hardened offline-first sync so inspections finish even with spotty connectivity.',
        ],
        snippets: [
            {
                title: 'Inspection job aggregate',
                language: 'dart',
                code: `class InspectionJob {
  const InspectionJob({
    required this.id,
    required this.clientName,
    required this.scheduledAt,
    this.reportDraftRef,
    this.invoiceId,
  });

  bool get readyToInvoice => reportDraftRef != null && invoiceId == null;
}`,
            },
            {
                title: 'Queue writes while offline',
                language: 'dart',
                code: `Future<void> enqueuePhotoWrite(PhotoPayload payload) async {
  await localQueue.add(payload);
  if (await Connectivity().hasConnection()) {
    await flushPhotoQueue();
  }
}`,
            },
        ],
    },
    {
        id: 'legit-rides',
        title: 'Legit Rides',
        tagline: 'Dual-sided ride hailing platform for riders and drivers',
        carouselCaption:
            'Two coordinated apps for riders and drivers with real-time trip state, payouts, and dark/light themes tuned for long shifts and daily commuting.',
        shortDescription:
            'Ride hailing platform with separate rider and driver apps, full trip lifecycle state, dynamic pricing hooks, dark/light mode support, and resilient real-time communication.',
        image: Assets.logos.legitridesSquare,
        thumb: Assets.logos.legitridesSquare,
        year: '2026',
        role: 'Lead Mobile Engineer',
        detailTheme: {
            accentFrom: '#0EA5E9',
            accentTo: '#9333EA',
        },
        stack: ['Flutter', 'Firebase', 'WebSockets', 'Google Maps'],
        mockupAside:
            'Both apps share one event contract, so rider ETA, driver assignment, and payout milestones stay consistent even during reconnects or app backgrounding.',
        mockups: [
            { src: Assets.mockups.legitrides1, alt: 'Legit Rides rider app' },
            { src: Assets.mockups.legitrides2, alt: 'Legit Rides driver app' },
        ],
        highlights: [
            'Built rider and driver apps on a shared domain layer while preserving role-specific UX.',
            'Implemented dark and light themes with semantic tokens across maps, sheets, and trip states.',
            'Modeled dispatch, acceptance, pickup, and dropoff as deterministic socket-driven transitions.',
        ],
        snippets: [
            {
                title: 'Dual-app trip state reducer with replay safety',
                language: 'dart',
                code: `sealed class TripEvent {
  const TripEvent(this.seq);
  final int seq;
}

class DriverAssigned extends TripEvent {
  const DriverAssigned(super.seq, this.driver, this.vehicle);
  final DriverProfile driver;
  final VehicleMeta vehicle;
}

class TripStateMachine {
  static TripSnapshot? apply(TripSnapshot current, TripEvent event) {
    if (event.seq <= current.lastSeq && event is! ForceResyncEvent) {
      return null; // Drop replayed frames from reconnect bursts.
    }

    switch ((current.phase, event)) {
      case (TripPhase.searching, DriverAssigned assigned):
        return current.copyWith(
          phase: TripPhase.driverAssigned,
          driver: assigned.driver,
          vehicle: assigned.vehicle,
          lastSeq: event.seq,
        );
      case (TripPhase.driverAssigned, DriverArrived _):
        return current.copyWith(phase: TripPhase.driverArrived, lastSeq: event.seq);
      case (TripPhase.driverArrived, PassengerPicked _):
        return current.copyWith(phase: TripPhase.onTrip, lastSeq: event.seq);
      case (TripPhase.onTrip, RouteProgress p):
        return current.copyWith(
          encodedPolyline: p.remainingPolyline,
          etaSeconds: p.dropoffEta,
          distanceMeters: p.remainingMeters,
          lastSeq: event.seq,
        );
      case (_, TripClosed closed):
        return current.copyWith(
          phase: TripPhase.completed,
          fareBreakdown: closed.receipt,
          lastSeq: event.seq,
        );
      default:
        return current.copyWith(lastSeq: event.seq);
    }
  }
}`,
            },
            {
                title: 'Theme tokens for day/night parity across both apps',
                language: 'dart',
                code: `@immutable
class RideThemeTokens {
  const RideThemeTokens({
    required this.surfaceBase,
    required this.surfaceElevated,
    required this.textPrimary,
    required this.textMuted,
    required this.success,
    required this.warning,
    required this.danger,
    required this.mapRoad,
  });

  final Color surfaceBase;
  final Color surfaceElevated;
  final Color textPrimary;
  final Color textMuted;
  final Color success;
  final Color warning;
  final Color danger;
  final String mapRoad;
}

ThemeData buildRideTheme(Brightness brightness) {
  final dark = brightness == Brightness.dark;
  final tokens = dark
      ? const RideThemeTokens(
          surfaceBase: Color(0xFF0B1020),
          surfaceElevated: Color(0xFF131A2E),
          textPrimary: Color(0xFFF3F4F6),
          textMuted: Color(0xFF9CA3AF),
          success: Color(0xFF22C55E),
          warning: Color(0xFFF59E0B),
          danger: Color(0xFFEF4444),
          mapRoad: 'road.dark',
        )
      : const RideThemeTokens(
          surfaceBase: Color(0xFFFFFFFF),
          surfaceElevated: Color(0xFFF8FAFC),
          textPrimary: Color(0xFF0F172A),
          textMuted: Color(0xFF64748B),
          success: Color(0xFF16A34A),
          warning: Color(0xFFD97706),
          danger: Color(0xFFDC2626),
          mapRoad: 'road.light',
        );

  return ThemeData(
    brightness: brightness,
    scaffoldBackgroundColor: tokens.surfaceBase,
    cardColor: tokens.surfaceElevated,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFF3B82F6),
      brightness: brightness,
    ),
    extensions: [tokens],
  );
}`,
            },
        ],
    },
    {
        id: 'mediconnect',
        title: 'MediConnect',
        tagline: 'Professional social network and jobs platform for biopharma',
        carouselCaption:
            'A biopharma-first network where professionals publish insights, discover opportunities, and match with specialized roles through signal-rich profiles.',
        shortDescription:
            'Social media and job platform for the biopharma ecosystem, similar in spirit to BioYap, combining networking, feed publishing, and role discovery in one product.',
        image: Assets.logos.mediconnectSquare,
        thumb: Assets.logos.mediconnectSquare,
        year: '2026',
        role: 'Full-Stack Product Engineer',
        detailTheme: {
            accentFrom: '#2563EB',
            accentTo: '#0F766E',
        },
        stack: ['Flutter', 'Node.js', 'PostgreSQL', 'Elasticsearch'],
        mockupAside:
            'Discovery quality is driven by structured profile signals, so jobs and people recommendations reflect therapeutic areas, trial exposure, and verified expertise.',
        mockups: [
            { src: Assets.mockups.mediconnect1, alt: 'MediConnect social feed' },
            { src: Assets.mockups.mediconnect2, alt: 'MediConnect jobs and profile' },
        ],
        highlights: [
            'Designed a domain-specific social graph for biotech and biopharma professionals.',
            'Implemented ranking-aware job matching using profile signals and recency windows.',
            'Built moderation and trust controls for scientific content and hiring workflows.',
        ],
        snippets: [
            {
                title: 'Hybrid ranking for feed + role recommendations',
                language: 'typescript',
                code: `type Candidate = {
  id: string;
  kind: 'post' | 'job';
  recencyMinutes: number;
  qualityScore: number;
  graphAffinity: number;
  semanticMatch: number;
  negativeSignals: number;
};

export function rankMediConnectItems(candidates: Candidate[]): Candidate[] {
  return candidates
    .map((item) => {
      const recencyBoost = Math.exp(-item.recencyMinutes / 720); // 12h half-life feel
      const trustPenalty = Math.min(0.55, item.negativeSignals * 0.08);
      const roleBonus = item.kind === 'job' ? 0.06 : 0;
      const score =
        item.qualityScore * 0.33 +
        item.graphAffinity * 0.27 +
        item.semanticMatch * 0.24 +
        recencyBoost * 0.10 +
        roleBonus -
        trustPenalty;

      return { ...item, _score: score };
    })
    .sort((a, b) => b._score - a._score)
    .map(({ _score, ...rest }) => rest);
}`,
            },
            {
                title: 'Transactional application pipeline with audit trail',
                language: 'typescript',
                code: `export async function submitApplication(input: {
  candidateId: string;
  jobId: string;
  resumeAssetId: string;
  coverLetter?: string;
}) {
  return db.transaction(async (tx) => {
    const [candidate, job] = await Promise.all([
      tx.candidate.findUniqueOrThrow({ where: { id: input.candidateId } }),
      tx.job.findUniqueOrThrow({ where: { id: input.jobId } }),
    ]);

    if (job.status !== 'OPEN') throw new DomainError('Job is not accepting applications');
    if (!candidate.isVerifiedProfessional) throw new DomainError('Verification required');

    const app = await tx.application.create({
      data: {
        candidateId: candidate.id,
        jobId: job.id,
        resumeAssetId: input.resumeAssetId,
        coverLetter: input.coverLetter ?? null,
        stage: 'SUBMITTED',
      },
    });

    await tx.applicationEvent.create({
      data: {
        applicationId: app.id,
        type: 'SUBMITTED',
        actorId: candidate.id,
        payload: {
          profileSnapshotVersion: candidate.profileVersion,
          therapeuticAreas: candidate.therapeuticAreas,
        },
      },
    });

    await tx.job.update({
      where: { id: job.id },
      data: { applicationsCount: { increment: 1 }, lastAppliedAt: new Date() },
    });

    return app;
  });
}`,
            },
        ],
    },
    {
        id: 'luminate',
        title: 'Luminate',
        tagline: 'Clinical consultation portal for remote patient-doctor care',
        carouselCaption:
            'A private tele-clinic portal helping elderly patients consult from home through scheduled visits, secure records, and video sessions with partnered health centers.',
        shortDescription:
            'Medical and clinical portal currently in private trial with selected health centers. It schedules appointments and connects patients and doctors over video, especially for older patients with mobility challenges.',
        image: Assets.logos.luminateSquare,
        thumb: Assets.logos.luminateSquare,
        year: '2026',
        role: 'Senior Product Engineer',
        detailTheme: {
            accentFrom: '#14B8A6',
            accentTo: '#1D4ED8',
        },
        stack: ['Flutter', 'WebRTC', 'Node.js', 'FHIR'],
        mockupAside:
            'The core flow minimizes travel burden for elderly users: easy scheduling, reminder cadence, one-tap room entry, and continuity notes for follow-up consults.',
        mockups: [
            { src: Assets.mockups.luminate1, alt: 'Luminate appointment flow' },
            { src: Assets.mockups.luminate2, alt: 'Luminate teleconsultation flow' },
        ],
        highlights: [
            'Built teleconsultation workflows optimized for elderly patients and caregivers.',
            'Integrated meeting orchestration with device checks and fallback dial-in paths.',
            'Designed private, health-center-scoped access controls for pilot deployments.',
        ],
        snippets: [
            {
                title: 'Appointment orchestration with clinician availability locks',
                language: 'typescript',
                code: `export async function reserveConsultSlot(params: {
  patientId: string;
  clinicianId: string;
  slotStartIso: string;
  slotEndIso: string;
  centerId: string;
}) {
  const slotStart = new Date(params.slotStartIso);
  const slotEnd = new Date(params.slotEndIso);

  return db.$transaction(async (tx) => {
    const overlap = await tx.appointment.findFirst({
      where: {
        clinicianId: params.clinicianId,
        status: { in: ['SCHEDULED', 'CONFIRMED'] },
        startsAt: { lt: slotEnd },
        endsAt: { gt: slotStart },
      },
      select: { id: true },
    });
    if (overlap) throw new DomainError('Requested slot is no longer available');

    const appointment = await tx.appointment.create({
      data: {
        centerId: params.centerId,
        patientId: params.patientId,
        clinicianId: params.clinicianId,
        startsAt: slotStart,
        endsAt: slotEnd,
        status: 'SCHEDULED',
      },
    });

    await tx.clinicianCalendarBlock.create({
      data: {
        clinicianId: params.clinicianId,
        startsAt: slotStart,
        endsAt: slotEnd,
        reason: 'PATIENT_CONSULT',
        appointmentId: appointment.id,
      },
    });

    return appointment;
  });
}`,
            },
            {
                title: 'Video-room readiness gate for low-friction join',
                language: 'typescript',
                code: `export async function prepareTeleVisitRoom(ctx: {
  appointmentId: string;
  actorId: string;
  actorRole: 'PATIENT' | 'DOCTOR' | 'CAREGIVER';
}) {
  const appointment = await appointmentRepo.requireById(ctx.appointmentId);
  accessPolicy.assertCanJoin(appointment, ctx.actorId, ctx.actorRole);

  const [network, media] = await Promise.all([
    rtcDiagnostics.measureNetwork(ctx.actorId),
    rtcDiagnostics.checkMediaDevices(ctx.actorId),
  ]);

  const profile = connectionPolicy.select({
    downKbps: network.downKbps,
    upKbps: network.upKbps,
    jitterMs: network.jitterMs,
    camera: media.cameraAvailable,
    mic: media.microphoneAvailable,
  });

  const room = await videoProvider.ensureRoom({
    roomKey: \`apt_\${appointment.id}\`,
    maxParticipants: 3,
    recording: false,
  });

  return {
    roomToken: await videoProvider.issueJoinToken(room.id, ctx.actorId, profile),
    profile,
    fallbackDialIn: profile.level === 'AUDIO_SAFE' ? room.dialIn : null,
  };
}`,
            },
        ],
    },
    {
        id: 'salah-pro',
        title: 'Salah Pro',
        tagline: 'Prayer times, AR compass, and community in one app',
        carouselCaption:
            'Prayer alarms, timezone-aware timing, AR-guided Qibla, donations, and a marketplace keep worship punctual while sidestepping admin clutter and guesswork about reminders.',
        shortDescription:
            'Alarms and timer app with augmented reality powered compass, donational transactions and marketplace.',
        image: Assets.logos.salahproBanner,
        detailHeroImage: Assets.logos.salahproImage,
        thumb: Assets.logos.salahproImage,
        year: '2023',
        role: 'Lead Mobile Engineer',
        detailTheme: {
            accentFrom: '#0D9488',
            accentTo: '#CA8A04',
        },
        stack: ['Flutter', 'Firebase', 'ARCore', 'Stripe', 'OneSignal'],
        highlights: [
            'Built reliable prayer-time and alarm flows with timezone-aware scheduling.',
            'Shipped an AR-assisted Qibla experience with smooth calibration and fallbacks.',
            'Integrated donations and a lightweight marketplace with secure checkout.',
        ],
        storeLinks: {
            googlePlay: 'https://play.google.com/store/search?q=salah+pro&c=apps&hl=en',
            appStore: 'https://apps.apple.com/us/app/salah-pro/id6744323227',
        },
        mockupAside:
            'Accurate prayer windows, unobtrusive reminders, and Qibla you can trust—the interface stays calm so the ritual stays the focus.',
        mockups: [
            { src: Assets.mockups.salahpro1, alt: 'Salah Pro on device' },
            { src: Assets.mockups.salahpro2, alt: 'Salah Pro on device' },
        ],
        snippets: [
            {
                title: 'Scheduling local notifications',
                language: 'dart',
                code: `Future<void> schedulePrayerAlarms(PrayerDay day) async {
  final plugin = FlutterLocalNotificationsPlugin();
  for (final slot in day.slots) {
    await plugin.zonedSchedule(
      slot.id,
      slot.title,
      slot.body,
      slot.scheduledTime,
      const AndroidNotificationDetails('prayer', 'Prayer'),
      androidScheduleMode: AndroidScheduleMode.exactAllowWhileIdle,
      uiLocalNotificationDateInterpretation:
          UILocalNotificationDateInterpretation.absoluteTime,
    );
  }
}`,
            },
            {
                title: 'Qibla bearing from device orientation',
                language: 'dart',
                code: `double bearingToQibla(double lat, double lon, double qiblaLat, double qiblaLon) {
  final y = math.sin(qiblaLon - lon) * math.cos(qiblaLat);
  final x = math.cos(lat) * math.sin(qiblaLat) -
      math.sin(lat) * math.cos(qiblaLat) * math.cos(qiblaLon - lon);
  return (math.atan2(y, x) * 180 / math.pi + 360) % 360;
}`,
            },
        ],
    },
    {
        id: 'street-sense-media',
        title: 'Street Sense Media',
        tagline: 'Cashless vendor payments for Street Sense newspaper',
        carouselCaption:
            'Supporters tip Street Sense vendors by card at the curb with quick checkout, optional alerts, and privacy-first flows aligned with nonprofit publishing guidelines and trust.',
        shortDescription:
            'Mobile app for supporters in Washington, DC to pay Street Sense vendors by card when they do not have cash—point-of-sale payments, optional issue alerts, and privacy-conscious checkout per Street Sense Media’s app guidelines.',
        image: Assets.logos.streetSenseMediaSquare,
        thumb: Assets.logos.streetSenseMediaSquare,
        year: '2024',
        role: 'Mobile Engineer',
        detailTheme: {
            accentFrom: '#3B82F6',
            accentTo: '#1E3A8A',
        },
        stack: ['Flutter', 'Firebase', 'Stripe'],
        storeLinks: {
            googlePlay: 'https://play.google.com/store/apps/details?id=com.app.streetsenseapp&hl=en',
            appStore: 'https://apps.apple.com/us/app/street-sense-media/id1268010508',
        },
        mockupAside:
            'Card-based tips at the curb—find a vendor, pay in seconds, and move on without fumbling for bills.',
        mockups: [
            { src: Assets.mockups.streetsense1, alt: 'Street Sense Media on device' },
            { src: Assets.mockups.streetsense2, alt: 'Street Sense Media on device' },
        ],
        highlights: [
            'Built vendor discovery and one-tap checkout aligned with in-person sales.',
            'Shipped camera-based card capture—live preview, throttled frames, perspective crop, then OCR for tokenization.',
            'Wired payments through a processor-backed flow without persisting raw PAN on device.',
        ],
        snippets: [
            {
                title: 'Camera stream → throttled card frames',
                language: 'dart',
                code: `Future<void> startPhysicalCardScan() async {
  _controller = CameraController(
    _rearLens,
    ResolutionPreset.high,
    enableAudio: false,
    imageFormatGroup: ImageFormatGroup.yuv420,
  );
  await _controller!.initialize();

  await _controller!.startImageStream((CameraImage frame) async {
    if (!_frameGate.allow(
          monotonicId: frame.timestamp,
          minInterval: const Duration(milliseconds: 280),
        )) {
      return;
    }

    final nv21 = await compute(yuv420ToNv21Isolate, frame);
    final CardRoi? roi = await _edgeDetector.cardBoundingQuad(
      nv21,
      frame.width,
      frame.height,
      sensorOrientation: _controller!.description.sensorOrientation,
    );

    if (roi != null && mounted) {
      _scanPipeline.add(CardFramePayload(roi: roi, nv21: nv21));
    }
  });
}`,
            },
            {
                title: 'OCR pipeline + masked handoff to tokenization',
                language: 'dart',
                code: `Future<CardScanTokenRequest> buildTokenRequestFromCrop(
  Uint8List perspectiveCorrectedJpeg,
) async {
  final recognizer = TextRecognizer(script: TextRecognitionScript.latin);
  try {
    final doc = await recognizer.processImage(
      InputImage.fromBytes(
        bytes: perspectiveCorrectedJpeg,
        metadata: InputImageMetadata(
          size: _cropSize,
          rotation: _rotationToInputDegrees(),
          format: InputImageFormat.jpeg,
          bytesPerRow: perspectiveCorrectedJpeg.length,
        ),
      ),
    );

    final pan = CardPanParser.fromBlocks(doc.blocks);
    final expiry = ExpiryPair.parseLoose(doc.blocks);

    if (pan == null || !pan.passesLuhn) {
      throw CardScanException.unreadablePan;
    }

    return CardScanTokenRequest(
      vendorId: _session.vendorId,
      panLast4: pan.lastFour,
      expiryMonth: expiry.month,
      expiryYear: expiry.year,
      cardholderName: CardholderNameHeuristic.best(doc.blocks),
      clientNonce: await _vault.issueEphemeralNonce(),
    );
  } finally {
    await recognizer.close();
    await zeroize(perspectiveCorrectedJpeg);
  }
}`,
            },
        ],
    },
];

export function getProjectById(id) {
    return projects.find((p) => p.id === id) ?? null;
}
